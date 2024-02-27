interface LandingProps {
  hideLanding: () => void;
  userInput: { category: number; numOfQuestions: number; loading: boolean };
  setUserInput: React.Dispatch<
    React.SetStateAction<{
      category: number;
      numOfQuestions: number;
      loading: boolean;
    }>
  >;
}

import data from "../../categories.json";

export default function Landing({
  hideLanding,
  userInput,
  setUserInput,
}: LandingProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="font-karla font-bold text-[31.25px] text-blue">
        Quizzical
      </h1>
      <h3 className="font-inter text-blue mb-[29px]">Test your knowledge</h3>
      <h3>Category:</h3>
      <select
        className="border text-center mb-[10px]"
        name="category"
        id="category"
        value={userInput.category}
        onChange={(e) =>
          setUserInput({ ...userInput, category: Number(e.target.value) })
        }
      >
        {data.trivia_categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <h3>Number of questions:</h3>
      <select
        className="border text-center w-full mb-[29px]"
        name="numOfQuestions"
        id="numOfQuestions"
        value={userInput.numOfQuestions}
        onChange={(e) =>
          setUserInput({ ...userInput, numOfQuestions: Number(e.target.value) })
        }
      >
        {Array.from({ length: 21 }, (_, i) => i + 5).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <button
        onClick={hideLanding}
        className="font-inter bg-[#4D5B9E] py-[16px] px-[28px] text-white rounded-2xl"
      >
        Start Quiz
      </button>
    </div>
  );
}
