import styles from "./Navbar.module.css";
import Button from "./Button";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <img src={logo} alt="Qtify" />
        <Button children="Give Feedback" />
      </nav>
    </>
  );
};

export default Navbar;
