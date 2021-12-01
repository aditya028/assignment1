import React from "react";
import getData from "./data";

function StateList({ currentState, setCurrentState }) {
  const data = getData();
  const setOfState = new Set(data.map((item) => item.state));
  const state = [];
  setOfState.forEach((key) => state.push(key));
  return (
    <div className="list-group">
      <button
        key="All State"
        type="button"
        onClick={() => setCurrentState("All State")}
        className={
          currentState === "All State"
            ? "list-group-item list-group-item-action active"
            : "list-group-item list-group-item-action"
        }
      >
        All State
      </button>
      {state.map((item) => {
        if (item)
          return (
            <button
              key={item}
              type="button"
              onClick={() => setCurrentState(item)}
              className={
                item === currentState
                  ? "list-group-item list-group-item-action active"
                  : "list-group-item list-group-item-action"
              }
            >
              {item}
            </button>
          );
      })}
    </div>
  );
}

export default StateList;
