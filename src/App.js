import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Link to="/ai">AI</Link> ' '
      <Link to="/findAiData">Find Ai Data</Link> ' '
      <Link to="/uploadAiData">Upload Ai Data</Link> ' '
      <Link to="/findModelData">Find Model Data</Link> ' '
      <Link to="/uploadModelData">Upload Model Data</Link> ' '
      <Router />
    </div>
  );
}

export default App;
