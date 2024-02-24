interface LandingProps {
  hideLanding: () => void;
}

export default function Landing({ hideLanding }: LandingProps) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-karla font-bold text-[31.25px] text-blue">
        Quizzical
      </h1>
      <h3 className="font-inter mb-[29px] text-blue">Test your knowledge</h3>
      <button
        onClick={hideLanding}
        className="font-inter bg-[#4D5B9E] py-[16px] px-[28px] text-[#F5F7FB] rounded-2xl"
      >
        Start Quiz
      </button>
    </div>
  );
}
