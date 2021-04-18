import "./Styles.css";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Forecast from "./Forecast";


export default function App() {
  return (
    <div className="App">
      <div className="container" id="main">
        <Header />
        <br />
        <Body />
        <br />
        <Forecast />
        <br />
      </div>
      
       <footer id="footer">
          This project was coded by <a href="https://nostalgic-bhabha-b4cffb.netlify.app/"
          target="_blank"/>Elsa Romeo and is {" "}
          <a
            href="https://github.com/elsaromeo/my-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >open-sourced on GitHub</a>
        </footer>
        
    </div>
  );
}
