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
  return (
    <div>
      {data.map((questionObj) => (
        <Question key={questionObj.question} questionObj={questionObj} />
      ))}
    </div>
  );
}
