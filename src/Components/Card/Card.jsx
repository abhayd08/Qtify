import styles from "./Card.module.css";

const Card = ({ image, followersCount, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-media"]}>
        <img src={image} alt="card-img" className={styles["card-image"]} />
        <div className={styles["card-content"]}>
          <p className={styles.followers}>{followersCount} Follows</p>
        </div>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Card;
