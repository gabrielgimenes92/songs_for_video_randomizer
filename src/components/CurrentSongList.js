import React from "react";
import "./CurrentSongList.css";
import ExportPlaylistDescription from "./ExportPlaylistDescription";

const CurrentSongList = (props) => {
  let handleClearList = () => {
    props.clearList();
  };

  return (
    <div className="current-song-list">
      <div className="playlist">
        {props.currentSongList.map((song) => (
          <p>
            {song.title} by {song.artist}
          </p>
        ))}
      </div>
      <p>
        Sum time: {props.sumMinutes}:{props.sumSeconds}
      </p>
      <button onClick={handleClearList}>Clear List</button>
      <ExportPlaylistDescription currentSongList={props.currentSongList} />
    </div>
  );
};

// map((song) => (
//     <p>{song.title}</p>
//   ))

export default CurrentSongList;
