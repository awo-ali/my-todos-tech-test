import React, { useState } from "react";
import "./Form.scss";

const Form = (props) => {
  const { handleChange, handleSubmit } = props;

  /*const clearScreen = (event) => {
    if ({handleSubmit}) {
        userInput = ("");
    }

    onClick={clearScreen}
  };*/

  return (
    <form className="form" onSubmit={handleSubmit} >
      <label>
        <input
          type="text"
          placeholder="Add your task here ..."
          name="{userInput}"
          onChange={handleChange}
          className="form__input"
        />
      </label>
      <input type="submit" className="form__button" value="+" />
    </form>
  );
};

export default Form;
