import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {

  const onClickButon = (msg) =>{
    alert(msg);
  }

  return (
    <button className="CreateTodoButton"
    onClick={() => onClickButon('Le hiciste click al boton')}
    >
      +
    </button>
  )
}

export default CreateTodoButton;
