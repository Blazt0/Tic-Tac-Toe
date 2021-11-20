import "./innerBoxes.css";
import React, { useState } from "react";
import Mark from "./mark";

const Squares = () => {
  const [turn, setTurn] = useState(0);
  const counterHandler = () => {
    setTurn(turn + 1);

  };

  return (
    <div>
      <div>
        <Mark turn={turn} counter={counterHandler}></Mark>
        <Mark turn={turn} counter={counterHandler}></Mark>
        <Mark turn={turn} counter={counterHandler}></Mark>
      </div>
      <div>
        <Mark turn={turn} counter={counterHandler}></Mark>
        <Mark turn={turn} counter={counterHandler}></Mark>
        <Mark turn={turn} counter={counterHandler}></Mark>
      </div>
      <div>
        <Mark turn={turn} counter={counterHandler}></Mark>
        <Mark turn={turn} counter={counterHandler}></Mark>
        <Mark turn={turn} counter={counterHandler}></Mark>
      </div>
    </div>
  );
};

export default Squares;
