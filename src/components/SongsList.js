import React from "react";
import SongCard from "./SongCard";
import "./SongsList.css";

const SongsList = (props) => {
  return (
    <ul className="songs-list">
      {props.songList.map((song) => (
        <SongCard
          song={song}
          addSongToCurrentSongList={props.addSongToCurrentSongList}
        />
      ))}
    </ul>
  );
};

export default SongsList;
