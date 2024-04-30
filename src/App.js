import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Hero from "./components/Hero";
import Invest from "./components/invest";

function App() {
  return (
    <div className="App">
      {/* <Login props="Admin" />
      <Login props="Harshada" />
      <Hero /> */}
      <Invest />
    </div>
  );
}

export default App;
