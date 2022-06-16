import "./App.scss";
import Header from "./container/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div class="app__inputWithButton">
        <input type="text" placeholder="Add your task here ..." name="input"  className="app__inputWithButton-input" />
        <button className="app__inputWithButton-button">+</button>
      </div>
      <p className="app__welcomeText">
        Nothing to see here yet ... Add a task in the field above!
      </p>
    </div>
  );
}

export default App;
