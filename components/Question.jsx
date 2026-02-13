import React from "react";  


function Question({ data, selectedAnswer, onSelect }) {
  return (
    <div>
      <h2>{data.question}</h2>

      {data.options.map((option, index) => (
        <div key={index}>
          <button
            onClick={() => onSelect(option)}
            style={{
              margin: "5px",
              backgroundColor:
                selectedAnswer === option ? "lightblue" : "white"
            }}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Question;
