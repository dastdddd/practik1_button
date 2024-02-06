import React, { useState } from "react";
const btn = [1, 2, 3, 4, 5, 6];

const Button2Color = () => {
  const [countBtn, setCountBtn] = useState();

  const handleClick = (index) => {
    setCountBtn(index);
  };

  return (
    <div>
      {btn.map((item, index) => (
        <button
          style={{
            backgroundColor: countBtn === index ? "red" : "",
            padding: countBtn === index ? "5px 10px" : "",
          }}
          onClick={() => handleClick(index)}
        >
          {item}
        </button>
      ))}
      <h1>Number button: {countBtn == null ? "Пусто" : countBtn + 1}</h1>
    </div>
  );
};

export default Button2Color;
