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
}: {
  questionObj: QuestionProps;
}) {
  let answers = incorrect_answers.concat(correct_answer);

  function shuffle(array: string[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  answers = shuffle(answers);

  return (
    <div className="border-b">
      <h2 className="font-karla font-bold text-blue mb-[12px] pt-[15px]">
        {question}
      </h2>
      <div className="flex pb-[20px]">
        {answers.map((answer) => (
          <div
            className={`mr-[12px] py-[4px] px-[18px] border border-lightblue rounded-lg text-blue`}
            key={answer}
          >
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
}
