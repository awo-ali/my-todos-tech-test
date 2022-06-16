import "./App.scss";
import React, { useState } from "react";
import Header from "./container/Header/Header";
import Note from "./components/Note/Note";
import Form from "./components/Form/Form";

const App = () => {
  
const [todos, setTodos] = useState([])
const [ userInput, setUserInput ] = useState('');

const handleChange = (event) => {
  event.preventDefault();
    setUserInput(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, {note:userInput, id:todos.length+1}]) 
   
};

const todoList = (todos) => { return todos.map((todos) => (
  <Note todos={todos.note} />
  ))
 
};

console.log(userInput);

  return (
    <div className="app">
      <Header />
      <Form handleChange={handleChange} handleSubmit={handleSubmit}/>
      <div className="notesContainer" >
      {todoList(todos)}
      </div>
      <p className="app__welcomeText">
        Nothing to see here yet ... Add a task in the field above!
      </p>
    </div>
  );
}

export default App;
