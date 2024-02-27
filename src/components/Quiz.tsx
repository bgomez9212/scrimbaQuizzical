interface QuestionProps {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
}

import { useState } from "react";
import Question from "./Question";
export default function Quiz({
  setShowLanding,
  questions,
  userInput,
}: {
  setShowLanding: (value: boolean) => void;
  questions: QuestionProps[];
  userInput: { category: number; numOfQuestions: number; loading: boolean };
}) {
  const [resultsScreen, setResultsScreen] = useState(false);
  const [numberOfCorrect, setNumberOfCorrect] = useState(0);
  let answersObj: { [key: string]: string } = {};
  for (let { question } of questions) {
    answersObj[question] = "";
  }

  function handleCheckAnswers() {
    for (let i = 0; i < questions.length; i++) {
      if (Object.values(answersObj)[i] === questions[i].correct_answer) {
        setNumberOfCorrect((prev) => prev + 1);
      }
    }
    setResultsScreen(true);
  }

  function handlePlayAgain() {
    setResultsScreen(false);
    setShowLanding(true);
  }

  if (userInput.loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {questions.map((questionObj) => (
        <Question
          key={questionObj.question}
          questionObj={questionObj}
          answersObj={answersObj}
          resultsScreen={resultsScreen}
        />
      ))}
      <div className="flex justify-center items-center py-5">
        {resultsScreen && (
          <>
            <h3 className="font-Inter font-bold text-blue text-[16px] mr-5">
              You have scored correct {numberOfCorrect}/{questions.length}{" "}
              answers
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
