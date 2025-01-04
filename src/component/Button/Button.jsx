import "./Button.css";

const colorThemes = {
  dark: {
    background: "#030303",
    hover: "#755CDE",
  },
  light: {
    background: "#EB7565",
    hover: "F6A560",
  },
};

const Button = ({ text, colorTheme }) => {
  return (
    <button
      style={{ backgroundColor: colorThemes[colorTheme].background }}
      className="button"
    >
      {text}
    </button>
  );
};

export default Button;
