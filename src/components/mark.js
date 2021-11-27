import React, { useState } from "react";
import "./innerBoxes.css";

const Mark = (props) => {
  let currentMark = ""
  const [box, setMark] = useState("");
  const makeX = () => {
    if (box === "X") {
      console.log("ERROR");
    } else if (box === "O") {
      console.log("ERROR");
    } else if (box === "") {
      setMark("X");
      props.counter("X");
      console.log(props.turn);
    }
  };

  const makeO = () => {
    if (box === "O") {
      console.log("Error");
    } else if (box === "X") {
      console.log("Error");
    } else if (box === "") {
      setMark("O");
      props.counter("O");
      console.log(props.turn);
    }
  };


  const clickHandler = () => { 

    if (props.turn % 2 === 0) {
      makeX();
      props.idHandler(props.id)
    } else {
      makeO();
      props.idHandler(props.id)
    }
  };


  return (
    <button onClick={clickHandler} className="square">
      {box}
    </button>
  );
};

export default Mark;
