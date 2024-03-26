import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";
import MainPages from "./components/MainPages";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showLoader && <Loader />}
      {!showLoader && (
        <div>
          <MainPages />
        </div>
      )}
    </>
  );
}

export default App;
