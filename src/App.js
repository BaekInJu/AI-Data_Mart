import "./style/App.css";
import Navigation from "./pages/Nivigation";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router />
    </div>
  );
}

export default App;