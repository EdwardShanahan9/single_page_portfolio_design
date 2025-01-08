import { useState } from "react";
import "./Button.css";

const colorThemes = {
  dark: {
    background: "#030303",
    hover: "#755CDE",
  },
  light: {
    background: "#EB7565",
    hover: "#F6A560",
  },
};

const Button = ({ text, colorTheme }) => {
  const [addEffect, setAddEffect] = useState(false);

  return (
    <button
      style={{
        backgroundColor: addEffect
          ? colorThemes[colorTheme].hover
          : colorThemes[colorTheme].background,
      }}
      onMouseEnter={() => setAddEffect(true)}
      onMouseLeave={() => setAddEffect(false)}
      className="button"
    >
      {text}
    </button>
  );
};

export default Button;
