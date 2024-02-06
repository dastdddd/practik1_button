import React, { useState } from "react";

const ButtonColor = () => {
  const [count, setCount] = useState();

  const handleClick = (num) => {
    setCount(num);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: count === 1 ? "green" : "" , padding:'10px 20px'}}
        onClick={() => handleClick(1)}
      >
        1
      </button>
      <button
        style={{ backgroundColor: count === 2 ? "green" : "" , padding:'10px 20px'}}
        onClick={() => handleClick(2)}
      >
        2
      </button>
      <button
        style={{ backgroundColor: count === 3 ? "green" : "" , padding:'10px 20px'}}
        onClick={() => handleClick(3)}
      >
        3
      </button>
      <button
        style={{ backgroundColor: count === 4 ? "green" : "" , padding:'10px 20px'}}
        onClick={() => handleClick(4)}
      >
        4
      </button>
      <h1>Number button: {count == null ? 'Пусто' : count}</h1>
    </div>
  );
};

export default ButtonColor;
