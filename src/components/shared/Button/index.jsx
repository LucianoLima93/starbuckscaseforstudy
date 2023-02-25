import React from "react";
import { BlackButton, Link, SoftButton } from "./styles";

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
      {type === "link" && (
        <Link style={{...style}}>
          {text}
        </Link>
      )}
    </>
  );
};
export default Button;
