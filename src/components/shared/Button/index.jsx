import React from "react";
import { BlackButton, SoftButton } from "./styles";

const Button = ({type, text, style}) => {
  return (
    <>
      {type === "black" && (
        <BlackButton style={{...style}}>
          {text}
        </BlackButton>
      )}
      {type === "soft" && (
        <SoftButton style={{...style}}>
          {text}
        </SoftButton>
      )}
    </>
  );
};
export default Button;
