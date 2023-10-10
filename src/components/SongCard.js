import React from "react";
import "./SongCard.css";

const SongCard = (props) => {
  const handleClick = () => {
    props.addSongToCurrentSongList(props.song);
    console.log(props.song);
  };

  return (
    <li className="song-card">
      <h1>{props.song.title}</h1>
      <h2>{props.song.artist}</h2>
      <div>
        <p>
          {props.song.lengthMinutes}:{props.song.lengthSeconds}
        </p>
      </div>
      <button onClick={handleClick}>Add song</button>
    </li>
  );
};

export default SongCard;
