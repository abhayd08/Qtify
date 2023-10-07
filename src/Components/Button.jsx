import styles from "./Button.module.css";

const Button = ({ children }) => {
  return <button className={styles["nav-btn"]}>{children}</button>;
};

export default Button;
