import "./Styles.css";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <br />
        <Body />
        <br />
        <Forecast />
        <br />
      </div>
    </div>
  );
}
