interface QuestionProps {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

import { useState } from "react";
import data from "../../placeholder.json";
import Question from "./Question";
export default function Quiz({
  setShowLanding,
}: {
  setShowLanding: (value: boolean) => void;
}) {
  const [resultsScreen, setResultsScreen] = useState(false);
  const [numberOfCorrect, setNumberOfCorrect] = useState(0);
  let answersObj: { [key: string]: string } = {};
  for (let { question } of data) {
    answersObj[question] = "";
  }

  function handleCheckAnswers() {
    for (let i = 0; i < data.length; i++) {
      if (Object.values(answersObj)[i] === data[i].correct_answer) {
        setNumberOfCorrect((prev) => prev + 1);
      }
    }
    setResultsScreen(true);
  }

  function handlePlayAgain() {
    setResultsScreen(false);
    setShowLanding(true);
  }

  return (
    <div>
      {data.map((questionObj) => (
        <Question
          key={questionObj.question}
          questionObj={questionObj}
          answersObj={answersObj}
        />
      ))}
      <div className="flex justify-center items-center pt-[31px]">
        {resultsScreen && (
          <>
            <h3 className="font-Inter font-bold text-blue text-[16px] mr-5">
              You have scored correct {numberOfCorrect}/{data.length} answers
            </h3>
            <button
              className="py-[12px] px-[22px] bg-lightblue text-Inter text-white rounded-xl font-semibold"
              onClick={handlePlayAgain}
            >
              Play again
            </button>
          </>
        )}
        {!resultsScreen && (
          <button
            className="py-[12px] px-[22px] bg-lightblue text-Inter text-white rounded-xl font-semibold"
            onClick={handleCheckAnswers}
          >
            Check answers
          </button>
        )}
      </div>
    </div>
  );
}
