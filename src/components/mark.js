import React, { useState } from "react";
import "./innerBoxes.css";

const Mark = (props) => {
  const [box, setMark] = useState("");
  const makeX = () => {
    if (box === "X") {
      console.log("ERROR");
    } else if (box === "O") {
      console.log("ERROR");
    } else if (box === "") {
      setMark("X");
      props.counter();
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
      props.counter();
      console.log(props.turn);
    }
  };

  const clickHandler = () => {
    if (props.turn % 2 === 0) {
      makeX();
    } else {
      makeO();
    }
  };

  return (
    <button onClick={clickHandler} className="square">
      {box}
    </button>
  );
};

export default Mark;
