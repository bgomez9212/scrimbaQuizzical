import { decode } from "html-entities";
import { useEffect, useState } from "react";

interface QuestionProps {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
}

export default function Question({
  questionObj: {
    type,
    difficulty,
    category,
    question,
    correct_answer,
    incorrect_answers,
    answers,
  },
  answersObj,
  resultsScreen,
}: {
  questionObj: QuestionProps;
  answersObj: { [key: string]: string };
  resultsScreen: boolean;
}) {
  const [selected, setSelected] = useState("");

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
        {answers?.map((answer) =>
          !resultsScreen ? (
            <div
              className={`mr-[12px] py-[4px] px-[18px] border border-lightblue rounded-lg text-blue cursor-pointer ${selected === answer ? "bg-selected border-none" : ""}`}
              key={answer}
              onClick={() => handleClick(answer)}
            >
              {decode(answer)}
            </div>
          ) : (
            <div
              className={`mr-[12px] py-[4px] px-[18px] border border-lightblue rounded-lg text-blue cursor-pointer
                ${
                  answer === correct_answer
                    ? "bg-correct border-none"
                    : selected === answer && selected !== correct_answer
                      ? "bg-incorrect border-none opacity-60"
                      : "opacity-60"
                }`}
              key={answer}
            >
              {decode(answer)}
            </div>
          )
        )}
      </div>
    </div>
  );
}
