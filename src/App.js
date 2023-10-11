import { useEffect, useState } from "react";
import "./App.css";
import AddSong from "./components/AddSong";
import SongsList from "./components/SongsList";
import { songListDatabase } from "./assets/songListDatabase";
import CurrentSongList from "./components/CurrentSongList";

function App() {
  let [songList, setSongList] = useState(songListDatabase);
  let [toggleAllSongs, setToggleAllSongs] = useState(false);
  let [currentSongList, setCurrentSongList] = useState([]);
  let [sumSeconds, setSumSeconds] = useState();
  let [sumMinutes, setSumMinutes] = useState();

  const handleToggleAllSongsList = () => {
    setToggleAllSongs(!toggleAllSongs);
  };

  const updatePlaylistTime = () => {
    let newSumSeconds = 0;
    let newSumMinutes = 0;
    let i = 0;
    while (i < currentSongList.length) {
      newSumSeconds += currentSongList[i].lengthSeconds;
      newSumMinutes += currentSongList[i].lengthMinutes;
      i += 1;
    }
    newSumMinutes = String(
      newSumMinutes + Math.floor(newSumSeconds / 60)
    ).padStart(2, "0");
    newSumSeconds = String(newSumSeconds % 60).padStart(2, "0");

    setSumSeconds(newSumSeconds);
    setSumMinutes(newSumMinutes);
  };

  useEffect(() => {
    updatePlaylistTime();
  }, [currentSongList]);

  const addSongToCurrentSongList = (newSong) => {
    setCurrentSongList([
      ...currentSongList,
      {
        title: newSong.title,
        artist: newSong.artist,
        lengthMinutes: newSong.lengthMinutes,
        lengthSeconds: newSong.lengthSeconds,
        textForDescription: newSong.textForDescription,
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
          sumMinutes={sumMinutes}
          sumSeconds={sumSeconds}
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
