import { useEffect, useState } from "react";
import Landing from "./components/Landing";
import Quiz from "./components/Quiz";

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [userInput, setUserInput] = useState({
    category: 9,
    numOfQuestions: 5,
    loading: true,
  });

  function hideLanding() {
    setShowLanding(false);
  }

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
  // get questions when necessary
  useEffect(() => {
    if (!showLanding) {
      setUserInput({ ...userInput, loading: true });
      fetch(
        `https://opentdb.com/api.php?amount=${userInput.numOfQuestions}&type=multiple&category=${userInput.category}`
      )
        .then((response) => response.json())
        .then((data) => data.results)
        .then((results) => {
          for (let result of results) {
            result.answers = shuffle(
              result.incorrect_answers.concat(result.correct_answer)
            );
          }
          return results;
        })
        .then((questions) => {
          setQuestions(questions);
          setUserInput({ ...userInput, loading: false });
        });
    }
  }, [showLanding]);

  return (
    <div className="flex justify-center items-center min-h-[100vh] mt-10">
      {showLanding && (
        <Landing
          hideLanding={hideLanding}
          setUserInput={setUserInput}
          userInput={userInput}
        />
      )}
      {!showLanding && (
        <Quiz
          setShowLanding={setShowLanding}
          questions={questions}
          userInput={userInput}
        />
      )}
    </div>
  );
}

export default App;
