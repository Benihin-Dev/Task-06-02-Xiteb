import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";
import HomePage from "./components/HomePage";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=" font-ubuntu ">
      {showLoader && <Loader />}
      {!showLoader && <HomePage />}
    </div>
  );
}

export default App;
