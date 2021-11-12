import "./innerBoxes.css";

import Mark from "./mark";

const Squares = () => {

  let turn = 0

  return (
    <div >
      <div >
        <Mark></Mark>
        <Mark></Mark>
        <Mark></Mark>
      </div>
      <div>
        <Mark></Mark>
        <Mark></Mark>
        <Mark></Mark>
      </div>
      <div>
        <Mark></Mark>
        <Mark></Mark>
        <Mark></Mark>
      </div>
    </div>
  );
};

export default Squares;
