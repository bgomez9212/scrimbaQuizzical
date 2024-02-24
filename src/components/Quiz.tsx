interface QuestionProps {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

import data from "../../placeholder.json";
import Question from "./Question";
export default function Quiz() {
  let answersObj: { [key: string]: string } = {};
  for (let { question } of data) {
    answersObj[question] = "";
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
      <button onClick={() => console.log(answersObj)}>Submit</button>
    </div>
  );
}
