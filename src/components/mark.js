import React, { useState } from "react";
import "./innerBoxes.css";

const Mark = () => {

  const [box, setX] = useState();

  const makeX = () => {
    if (box === "X") {
      console.log("ERROR");
    } else if (box === "O") {
      console.log("ERROR");
    } else {
      setX("X");
      console.log("CLICKEDX");
    }
  }
  
  const clickHandler = () => {
      let i = 0
      const counter = () => {
        i = i + 1
        console.log(i)
      }
      makeX()
      counter()

  };

  return (
    <button onClick={clickHandler} className="square">
      {box}
    </button>
  );
};

export default Mark;
