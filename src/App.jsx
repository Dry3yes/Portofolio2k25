import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import Home from "./components/sections/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showHome, setShowHome] = useState(false);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowHome(true), 100);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Loading Screen */}
      <div
        className={`absolute w-full h-full transition-opacity duration-1000 ${
          isLoading ? "opacity-100 z-50" : "opacity-0 -z-10"
        }`}
      >
        <LoadingScreen />
      </div>

      {/* Home */}
      <div
        className={`absolute w-full h-full transition-all duration-1000 ease-in-out transform ${
          showHome ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <Home />
      </div>
    </div>
  );
}

export default App;
