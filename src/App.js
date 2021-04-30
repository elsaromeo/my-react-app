import "./Styles.css";
import "./App.css";
import Weather from "./Weather";



export default function App() {
  return (
    <div className="App">
      <div className="container" id="main">
        <Weather defaultCity="Milan" />
        <br />
      </div>
      
       <footer id="footer">
          This project was coded by <a href="https://nostalgic-bhabha-b4cffb.netlify.app/"
          target="_blank" rel="noreferrer"/>Elsa Romeo and is {" "}
          <a
            href="https://github.com/elsaromeo/my-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >open-sourced on GitHub</a>
        </footer>
        
    </div>
  );
}
