import React, { useState } from "react";

import getData from "./data";

function CollegeList({ currentState }) {
  const data = getData();
  let college =
    currentState === "All State"
      ? data
      : data.filter((item) => item.state === currentState);
  // if (currentState !== "All State")
  // college = data.filter((item) => item.state === currentState);
  return (
    <div className="list-group">
      <h1>
        Showing {college.length} colleges from {currentState}
      </h1>
      {college.map((item , id) => (
        <button
          onClick={() => (window.location.href = `${item.web_pages[0]}`)}
          key={id}
          type="button"
          className="list-group-item list-group-item-action "
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CollegeList;
