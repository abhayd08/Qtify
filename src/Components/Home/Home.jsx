import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Card from "../Card/Card";
import CardsGrid from "../CardsGrid/CardsGrid";
import AlbumsHeader from "../AlbumsHeader/AlbumsHeader";
import styles from "./Home.module.css";
import CardCarousel from "../CardCarousel/CardCarousel";
import FilterTab from "../FilterTab/FilterTab";
import FAQ from "../FAQ/FAQ";
import SearchResult from "../SearchResult/SearchResult";

const Home = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [albumsToExpand, setAlbumsToExpand] = useState([]);
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);

  const allAlbumsData = [...topAlbums, ...newAlbums];
  const [searchResultData, setSearchResultData] = useState([]);
  const MyContext = createContext();

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

      try {
        const genresResponse = await axios.get(
          "https://qtify-backend-labs.crio.do/genres"
        );
        setGenres(genresResponse.data.data);
      } catch (error) {
        console.log(error);
      }

      try {
        const songsResponse = await axios.get(
          "https://qtify-backend-labs.crio.do/songs"
        );
        setSongs(songsResponse.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <MyContext.Provider value={{ setSearchResultData }}>
      <Navbar allAlbumsData={allAlbumsData} myContext={MyContext} />
      {searchResultData.length > 0 ? (
        <SearchResult data={searchResultData} myContext={MyContext} />
      ) : (
        ""
      )}
      <HeroSection />
      <div className={styles.container}>
        <AlbumsHeader
          title="Top Albums"
          albums={topAlbums}
          albumsToExpand={albumsToExpand}
          setAlbumsToExpand={setAlbumsToExpand}
        />
        {topAlbums.length > 0 ? (
          albumsToExpand.includes("Top Albums") ? (
            <CardsGrid albums={topAlbums} />
          ) : (
            <CardCarousel
              data={topAlbums}
              renderComponent={(data) => {
                return <Card albumsData={data} />;
              }}
            />
          )
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <CircularProgress color="success" />
          </div>
        )}
      </div>
      <div className={styles.container}>
        <AlbumsHeader
          title="New Albums"
          albums={newAlbums}
          albumsToExpand={albumsToExpand}
          setAlbumsToExpand={setAlbumsToExpand}
        />
        {newAlbums.length > 0 ? (
          albumsToExpand.includes("New Albums") ? (
            <CardsGrid albums={newAlbums} />
          ) : (
            <CardCarousel
              data={newAlbums}
              renderComponent={(data) => {
                return <Card albumsData={data} />;
              }}
            />
          )
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <CircularProgress color="success" />
          </div>
        )}
      </div>
      <div className={styles["songs-container"]}>
        <FilterTab genres={genres} songs={songs} />
      </div>
      <FAQ />
    </MyContext.Provider>
  );
};

export default Home;
