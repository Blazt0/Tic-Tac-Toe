import "./innerBoxes.css";
import React, { useEffect, useState, } from "react";
import Mark from "./mark";

const Squares = () => {
  const [currentMark, setCurrentMark] = useState("X")
  const [turn, setTurn] = useState(0);
  const defaultState = {first: "1", second: "2", third: "3", fourth: "4", fifth: "5", sixth: "6", seventh: "7", eigth: "8", ninth: "9"}
  const counterHandler = (enteredMark) => {
    setTurn(turn + 1);
    setCurrentMark(enteredMark)
  };

  const [currentID, setCurrentID] = useState()
  const [currentState, setCurrentState] = useState(defaultState)
  const IdHandler = (enteredID) => {

   setCurrentID(enteredID)
    console.log(enteredID)
  }

  useEffect(() => {
    if (currentID === undefined) {
      return
    } else {
       setCurrentState(prevState => ({ 
    ...prevState,
    [currentID]: currentMark,
   }))      
  }
  }, [currentID])

  // useEffect(() => {
  //   switch (currentState) {
  //     case currentState.first == "X": 
  //     case currentState.first == "O":
  //     console.log("hello");
  //     break;
  //    default:
  //      console.log("defaulted");
  //      console.log(currentState.first)
  //   }
  // }, [currentState])

    useEffect(() => {
      if ((currentState.first === currentState.second && currentState.first === currentState.third)) {
        alert(currentState.first + " WINS!")
      } else if (currentState.fourth === currentState.fifth && currentState.fourth === currentState.sixth) {
        alert(currentState.fourth + " WINS!") 
      } else if (currentState.seventh === currentState.eigth && currentState.seventh === currentState.ninth) {
        alert(currentState.seventh + " WINS!")
      } else if (currentState.first === currentState.fourth && currentState.first === currentState.seventh) {
        alert(currentState.first + " WINS!")
      } else if (currentState.second === currentState.fifth && currentState.second === currentState.eigth) {
        alert(currentState.second + " WINS!")
      } else if (currentState.third === currentState.sixth && currentState.third === currentState.ninth) {
        alert(currentState.third + " WINS!")
      } else if (currentState.first === currentState.fifth && currentState.first === currentState.ninth) {
        alert(currentState.first + " WINS!")
      } else if (currentState.third === currentState.fifth && currentState.third === currentState.seventh) {
        alert(currentState.third + " WINS!")
      } else {
        console.log(currentState)
      }
  }, [currentState]) 
 
   // const winningConditions = [
   //   [1, 2, 3],
   //   [4, 5, 6],
   //   [7, 8, 9],
   //   [1, 4, 7],
   //   [2, 5, 8],
   //   [3, 6, 9],
   //   [1, 5, 9],
   //   [3, 5, 7],
   // ];

  return (
    <div>
      <div>
        <Mark id={"first"} idHandler={IdHandler} turn={turn} counter={counterHandler}></Mark>
        <Mark id={"second"} idHandler={IdHandler} turn={turn} counter={counterHandler}></Mark>
        <Mark id={"third"} idHandler={IdHandler} turn={turn} counter={counterHandler}></Mark>
      </div>
      <div>
        <Mark id={"fourth"} idHandler={IdHandler} turn={turn} counter={counterHandler}></Mark>
        <Mark id={"fifth"} idHandler={IdHandler} turn={turn} counter={counterHandler}></Mark>
        <Mark id={"sixth"} idHandler={IdHandler} turn={turn} counter={counterHandler}></Mark>
      </div>
      <div>
        <Mark id={"seventh"} idHandler={IdHandler} turn={turn} counter={counterHandler}></Mark>
        <Mark id={"eigth"} idHandler={IdHandler} turn={turn} counter={counterHandler}></Mark>
        <Mark id={"ninth"} idHandler={IdHandler} turn={turn} counter={counterHandler}></Mark>
      </div>
    </div>
  );
};

export default Squares;
