import styles from "./AlbumsHeader.module.css";

const AlbumsHeader = ({
  title,
  albums = [],
  albumsToExpand,
  setAlbumsToExpand,
}) => {
  return (
    <div className={styles["albums-header"]}>
      <div className={styles["albums-brand"]}>{title}</div>
      {
        albumsToExpand.includes(title) ? (
          <div
            className={styles.btn}
            onClick={() => {
              const newState = [...albumsToExpand];
              newState.splice(newState.indexOf(title), 1);
              setAlbumsToExpand(newState);
            }}
          >
            Collapse
          </div>
        ) : (
          <div
            className={styles.btn}
            onClick={() => {
              const newState = [...albumsToExpand];
              newState.push(title);
              setAlbumsToExpand(newState);
            }}
          >
            Show all
          </div>
        )
      }
    </div>
  );
};

export default AlbumsHeader;
