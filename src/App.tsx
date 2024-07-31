import About from "./components/About";
import "./App.css";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import { setWebsiteTitle } from "./Utilities/Hooks/Title";

function App() {
  setWebsiteTitle();
  return (
    <div className="background">
      <About></About>
      <Journey></Journey>
      <Projects></Projects>
    </div>
  );
}

export default App;
