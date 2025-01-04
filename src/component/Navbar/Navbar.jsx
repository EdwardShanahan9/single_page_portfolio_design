import Logo from "../../assets/img/logo.svg";
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={Logo} alt="Logo" />

      <Button text="Free Consultation" colorTheme="dark" />
    </nav>
  );
};

export default Navbar;
