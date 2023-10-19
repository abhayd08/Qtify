import styles from "./Card.module.css";

const Card = ({ albumsData }) => {
  const {image, follows, title, likes} = albumsData;
  return (
    <div className={styles.card}>
      <div className={styles["card-media"]}>
        <img src={image} alt="card-img" className={styles["card-image"]} />
        <div className={styles["card-content"]}>
          {likes ? 
          
          <p className={styles["likes-follows"]}>{likes} Likes</p> :
          <p className={styles["likes-follows"]}>{follows} Follows</p>
        }
        </div>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Card;
