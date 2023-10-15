import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Card from "../Card/Card";
import CardsGrid from "../CardsGrid/CardsGrid";
import AlbumsHeader from "../AlbumsHeader/AlbumsHeader";
import styles from "./Home.module.css";
import CardCarousel from "../CardCarousel/CardCarousel";

const Home = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [albumsToExpand, setAlbumsToExpand] = useState([]);

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
    <>
      <Navbar />
      <HeroSection />
      <div className={styles.container}>
        <AlbumsHeader
          title="Top Albums"
          albums={topAlbums}
          albumsToExpand={albumsToExpand}
          setAlbumsToExpand={setAlbumsToExpand}
        />
        {albumsToExpand.includes("Top Albums") ? (
          <CardsGrid albums={topAlbums} />
        ) : (
          <CardCarousel
            data={topAlbums}
            renderComponent={(data) => {
              return <Card albumsData={data} />;
            }}
          />
        )}
      </div>
      <div className={styles.container}>
        <AlbumsHeader
          title="New Albums"
          albums={newAlbums}
          albumsToExpand={albumsToExpand}
          setAlbumsToExpand={setAlbumsToExpand}
        />
        {albumsToExpand.includes("New Albums") ? (
          <CardsGrid albums={newAlbums} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Home;
