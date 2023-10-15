import styles from "./Card.module.css";

const Card = ({ albumsData }) => {
  console.log(albumsData)
  const {image, follows, title} = albumsData;
  return (
    <div className={styles.card}>
      <div className={styles["card-media"]}>
        <img src={image} alt="card-img" className={styles["card-image"]} />
        <div className={styles["card-content"]}>
          <p className={styles.followers}>{follows} Follows</p>
        </div>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Card;
