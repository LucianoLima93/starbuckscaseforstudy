import React from "react";
import { BlackButton, Link, SoftButton } from "./styles";

type ButtonType = "black" | "soft" | "link";

interface ButtonProps {
  type: ButtonType;
  text: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ type, text, style }) => {
  return (
    <>
      {type === "black" && (
        <BlackButton style={{ ...style }}>
          {text}
        </BlackButton>
      )}
      {type === "soft" && (
        <SoftButton style={{ ...style }}>
          {text}
        </SoftButton>
      )}
      {type === "link" && (
        <Link style={{ ...style }}>
          {text}
        </Link>
      )}
    </>
  );
};

export default Button;
