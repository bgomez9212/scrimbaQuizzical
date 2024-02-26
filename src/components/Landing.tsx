interface LandingProps {
  hideLanding: () => void;
}

import data from "../../categories.json";

export default function Landing({ hideLanding }: LandingProps) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-karla font-bold text-[31.25px] text-blue">
        Quizzical
      </h1>
      <h3 className="font-inter text-blue mb-[29px]">Test your knowledge</h3>
      <h3>Category:</h3>
      <select className="border text-center" name="category" id="category">
        {data.trivia_categories.map((category) => (
          <option value={category.id}>{category.name}</option>
        ))}
      </select>
      <h3>Number of questions:</h3>
      <select
        className="border text-center w-full mb-[29px]"
        name="category"
        id="category"
      >
        {Array.from({ length: 20 }, (_, i) => i + 5).map((number) => (
          <option value={number}>{number}</option>
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
