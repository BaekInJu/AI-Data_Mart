import "./style/App.css";
import Navigation from "./pages/Nivigation";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <div className="contents">
        <Navigation />
        <div className="body">
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;