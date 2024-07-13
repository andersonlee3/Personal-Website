import About from "./components/About";
import "./App.css";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Anderson Lee";
  }, []);
  return (
    <div className="background">
      <About></About>
      <Journey></Journey>
      <Projects></Projects>
    </div>
  );
}

export default App;
