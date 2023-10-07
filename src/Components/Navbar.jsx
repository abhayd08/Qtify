import styles from "./Navbar.module.css";
import Button from "./Button";
import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Qtify" />
      <SearchBar className={styles.navbar} />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default Navbar;
