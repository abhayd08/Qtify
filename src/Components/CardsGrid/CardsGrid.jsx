import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./CardsGrid.module.css";

const CardsGrid = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [toExpandTopAlbums, setToExpandTopAlbums] = useState(true);
  const [toExpandNewAlbums, setToExpandNewAlbums] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const topAlbumsResponse = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );
        setTopAlbums(topAlbumsResponse.data);
      } catch (error) {
        console.log(error);
      }

      try {
        const newAlbumsResponse = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/new"
        );
        setNewAlbums(newAlbumsResponse.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles["albums-container"]}>
        <div className={styles["albums-header"]}>
          <div className={styles["albums-brand"]}>Top Albums</div>
          {topAlbums.length > 1 ? (
            toExpandTopAlbums ? (
              <div
                className={styles.btn}
                onClick={() => {
                  setToExpandTopAlbums(false);
                }}
              >
                Collapse
              </div>
            ) : (
              <div
                className={styles.btn}
                onClick={() => {
                  setToExpandTopAlbums(true);
                }}
              >
                Show all
              </div>
            )
          ) : (
            ""
          )}
        </div>
        <div
          className={`${styles["card-container-albums"]} ${
            toExpandTopAlbums ? styles["flex-wrap"] : styles["no-wrap"]
          }`}
        >
          {topAlbums.map((topAlbum) => {
            return (
              <Card
                key={topAlbum.id}
                image={topAlbum.image}
                title={topAlbum.title}
                followersCount={topAlbum.follows}
              />
            );
          })}
        </div>
      </div>
      <div className={styles["albums-container"]}>
        <div className={styles["albums-header"]}>
          <div className={styles["albums-brand"]}>New Albums</div>
          {newAlbums.length > 1 ? (
            toExpandNewAlbums ? (
              <div
                className={styles.btn}
                onClick={() => {
                  setToExpandNewAlbums(false);
                }}
              >
                Collapse
              </div>
            ) : (
              <div
                className={styles.btn}
                onClick={() => {
                  setToExpandNewAlbums(true);
                }}
              >
                Show all
              </div>
            )
          ) : (
            ""
          )}
        </div>
        <div
          className={`${styles["card-container-albums"]} ${
            toExpandNewAlbums ? styles["flex-wrap"] : styles["no-wrap"]
          }`}
        >
          {newAlbums.map((newAlbum) => {
            return (
              <Card
                key={newAlbum.id}
                image={newAlbum.image}
                title={newAlbum.title}
                followersCount={newAlbum.follows}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsGrid;
