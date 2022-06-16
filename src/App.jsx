import "./App.scss";
import React, { useState } from "react";
import Header from "./container/Header/Header";
import Note from "./components/Note/Note";
import Form from "./components/Form/Form";

function App() {
  
const [todos, setTodos] = useState([])

const addTodo = todo =>{

}
  return (
    <div className="app">
      <Header />
      <Form />
      <Note userInput={userInput} />
    
      <p className="app__welcomeText">
        Nothing to see here yet ... Add a task in the field above!
      </p>
    </div>
  );
}

export default App;
