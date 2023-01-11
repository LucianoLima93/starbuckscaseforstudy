import React from "react";
import { BlackButton, SoftButton } from "./styles";

const Button = ({type, text}) => {
  return (
    <>
      {type === "black" && (
        <BlackButton>
          {text}
        </BlackButton>
      )}
      {type === "soft" && (
        <SoftButton>
          {text}
        </SoftButton>
      )}
    </>
  );
};
export default Button;
