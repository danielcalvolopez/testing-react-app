import "./App.css";
import Async from "./components/Async";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <h2>This is the index</h2>
      <Header />
      <Async />
    </div>
  );
};

export default App;
