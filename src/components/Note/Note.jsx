import React from "react";
import "./Note.scss";
import deleteIcon from "../../assets/images/delete-icon.png";

const Note = (props) => {

    const {todos} = props
    
  return (
    <div className="noteCard">
      <input
        type="checkbox"
        id="notes"
        name="notes"
        className="noteCard__input"
      />
      <p>{todos}</p>
      <img className="noteCard__deleteIcon" src={deleteIcon} alt="delete" />
    </div>
  );
};

export default Note;
