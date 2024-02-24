import { useState } from "react";
import Landing from "./components/Landing";
import Quiz from "./components/Quiz";

function App() {
  const [showLanding, setShowLanding] = useState(true);
  function hideLanding() {
    setShowLanding(false);
  }
  return (
    <div className="flex justify-center items-center border h-screen">
      {showLanding && <Landing hideLanding={hideLanding} />}
      {!showLanding && <Quiz />}
    </div>
  );
}

export default App;
