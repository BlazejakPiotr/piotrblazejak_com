import React from "react";

interface ButtonPropsInterface {
  text: string;
}

const Button = (props: ButtonPropsInterface) => {
  return <button className="btn-outline">{props.text}</button>;
};

export default Button;
