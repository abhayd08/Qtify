import React, { useState } from "react";
import styles from "./FilterTab.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CardCarousel from "../CardCarousel/CardCarousel";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";

const FilerTab = ({ genres, songs }) => {
  const [filter, setFilter] = useState("all");

  const handleChange = (event, newFilter) => {
    setFilter(newFilter);
  };

  const filterToMake = (filter, songs) => {
    const songsToShow = [];
    if (filter === "jazz") {
      songs.filter((song) => {
        if (song.genre.key === "jazz") {
          songsToShow.push(song);
        }
        return true;
      });
    } else if (filter === "rock") {
      songs.filter((song) => {
        if (song.genre.key === "rock") {
          songsToShow.push(song);
        }
        return true;
      });
    } else if (filter === "pop") {
      songs.filter((song) => {
        if (song.genre.key === "pop") {
          songsToShow.push(song);
        }
        return true;
      });
    } else if (filter === "blues") {
      songs.filter((song) => {
        if (song.genre.key === "blues") {
          songsToShow.push(song);
        }
        return true;
      });
    } else {
      return songs;
    }
    return songsToShow;
  };

  return (
    <div>
      <p className={styles.brand}>Songs</p>
      {songs.length > 0 ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Tabs
            value={filter}
            onChange={(event, newFilter) => {
              handleChange(event, newFilter);
              filterToMake(filter, songs);
            }}
            aria-label="Filters Tab"
          >
            <Tab value="all" label="All" className={styles.genres} />
            {genres.map((genre) => {
              return (
                <Tab
                  value={genre.key}
                  key={genre.key}
                  label={genre.label}
                  className={styles.genres}
                />
              );
            })}
          </Tabs>
          <CardCarousel
            data={(() => filterToMake(filter, songs))()}
            renderComponent={(data) => {
              return <Card albumsData={data} />;
            }}
          />
        </Box>
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
  );
};

export default FilerTab;
