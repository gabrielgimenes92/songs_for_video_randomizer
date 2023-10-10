import { useState } from "react";
import "./App.css";
import AddSong from "./components/AddSong";
import SongsList from "./components/SongsList";
import { songListDatabase } from "./assets/songListDatabase";
import CurrentSongList from "./components/CurrentSongList";

function App() {
  let [songList, setSongList] = useState(songListDatabase);
  let [toggleAllSongs, setToggleAllSongs] = useState(false);
  let [currentSongList, setCurrentSongList] = useState([]);

  const handleToggleAllSongsList = () => {
    setToggleAllSongs(!toggleAllSongs);
  };

  const addSongToCurrentSongList = (newSong) => {
    setCurrentSongList([
      ...currentSongList,
      {
        title: newSong.title,
        artist: newSong.artist,
        lengthMinutes: newSong.lengthMinutes,
        lengthSeconds: newSong.lengthSeconds,
      },
    ]);
  };

  const clearList = () => {
    setCurrentSongList([]);
  };

  return (
    <div className="App">
      <AddSong />
      {currentSongList.length === 0 ? (
        <p>No List Set</p>
      ) : (
        <CurrentSongList
          currentSongList={currentSongList}
          clearList={clearList}
        />
      )}
      <button onClick={handleToggleAllSongsList}>Toggle All Songs</button>
      {toggleAllSongs ? (
        <SongsList
          songList={songList}
          addSongToCurrentSongList={addSongToCurrentSongList}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
