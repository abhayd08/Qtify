import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import logo from "../../assets/logo.svg";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ allAlbumsData, myContext }) => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Qtify" />
      <SearchBar className={styles.navbar} allAlbumsData={allAlbumsData} myContext={myContext} />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default Navbar;
