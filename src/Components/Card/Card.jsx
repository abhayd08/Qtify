import Tooltip from "@mui/material/Tooltip";
import styles from "./Card.module.css";

const Card = ({ albumsData }) => {
  const { image, follows, title, likes, songs, genre } = albumsData;
  return (
    <div className={styles.card}>
      <Tooltip
        title={songs ? `${songs.length} Songs` : genre ? genre.label : ""}
        placement="top"
        arrow
      >
        <div className={styles["card-media"]}>
          <img src={image} alt="card-img" className={styles["card-image"]} />
          <div className={styles["card-content"]}>
            {likes ? (
              <p className={styles["likes-follows"]}>{likes} Likes</p>
            ) : (
              <p className={styles["likes-follows"]}>{follows} Follows</p>
            )}
          </div>
        </div>
      </Tooltip>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Card;
