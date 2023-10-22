import React from "react";
import styles from "./SearchResult.module.css";
import { useContext } from "react";
const SearchResult = ({ data, myContext }) => {
  const { setSearchResultData } = useContext(myContext);
  return (
    <div
      className={styles.container}
      onMouseLeave={() => {
        setSearchResultData([]);
      }}
    >
      <div className={styles.menu}>
        {data.map((itemData) => {
          return (
            <div className={styles["menu-item"]} key={itemData.id}>
              <div className={styles.media}>
                <img
                  src={itemData.image}
                  alt={itemData.title}
                  className={styles.img}
                />
                <div>
                  <p className={styles.title}>{itemData.title}</p>
                  <p className={styles["sub-title"]}>
                    {itemData.songs.length} Songs
                  </p>
                </div>
              </div>
              <div className={styles.follows}>{itemData.follows} Follows</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
