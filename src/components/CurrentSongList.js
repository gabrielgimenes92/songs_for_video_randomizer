import React from "react";

const CurrentSongList = (props) => {
  let handleClearList = () => {
    props.clearList();
  };

  return (
    <div>
      {props.currentSongList.map((song) => (
        <p>{song.title}</p>
      ))}
      <button onClick={handleClearList}>Clear List</button>
    </div>
  );
};

// map((song) => (
//     <p>{song.title}</p>
//   ))

export default CurrentSongList;
