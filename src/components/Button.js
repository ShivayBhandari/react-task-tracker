import React from "react";

const Button = (props) => {
  return (
    <button style={{ backgroundColor: props.color }} className="btn">
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
  text: "ClickMe!",
};

export default Button;
