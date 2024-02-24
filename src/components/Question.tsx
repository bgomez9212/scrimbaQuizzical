import { decode } from "html-entities";
import { useEffect, useState } from "react";

interface QuestionProps {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export default function Question({
  questionObj: {
    type,
    difficulty,
    category,
    question,
    correct_answer,
    incorrect_answers,
  },
  answersObj,
}: {
  questionObj: QuestionProps;
  answersObj: { [key: string]: string };
}) {
  const [selected, setSelected] = useState("");
  let answers = incorrect_answers.concat(correct_answer);

  function shuffle(array: string[]) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  useEffect(() => {
    answers = shuffle(answers);
  }, []);

  function handleClick(answer: string) {
    answersObj[question] = answer;
    setSelected(answer);
  }

  return (
    <div className="border-b">
      <h2 className="font-karla font-bold text-blue mb-[12px] pt-[15px]">
        {decode(question)}
      </h2>
      <div className="flex pb-[20px]">
        {answers.map((answer) => (
          <div
            className={`mr-[12px] py-[4px] px-[18px] border border-lightblue rounded-lg text-blue cursor-pointer ${selected === answer ? "bg-selected border-none" : ""}`}
            key={answer}
            onClick={() => handleClick(answer)}
          >
            {decode(answer)}
          </div>
        ))}
      </div>
    </div>
  );
}
