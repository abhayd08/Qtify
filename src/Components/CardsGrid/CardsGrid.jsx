import Card from "../Card/Card";
import styles from "./CardsGrid.module.css";

const CardsGrid = ({ albums = [] }) => {
  return (
    <div className={styles.container}>
      <div className={styles["albums-container"]}>
        <div className={styles["card-container-albums"]}>
          {albums.map((album) => {
            return <Card key={album.id} albumsData={album} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsGrid;
