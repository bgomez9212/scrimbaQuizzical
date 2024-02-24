import { useState } from "react";
import Landing from "./components/Landing";

function App() {
  const [showLanding, setShowLanding] = useState(true);
  function hideLanding() {
    setShowLanding(false);
  }
  return (
    <div className="flex justify-center items-center border h-screen">
      {showLanding && <Landing hideLanding={hideLanding} />}
    </div>
  );
}

export default App;
