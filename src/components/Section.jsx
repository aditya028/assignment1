import React, { useState } from "react";
import StateList from "./StateList";
import CollegeList from "./CollegeList";

function Section(props) {
  const [currentState, setCurrentState] = useState("All State");
  return (
    <div className="container ">
      <div className="row">
        <div className="col-3">
          <StateList
            currentState={currentState}
            setCurrentState={setCurrentState}
          />
        </div>
        <div className="col">
          <CollegeList currentState={currentState} />
        </div>
      </div>
    </div>
  );
}

export default Section;
