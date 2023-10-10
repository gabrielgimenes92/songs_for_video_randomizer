import React from "react";

const AddSong = () => {
  const handleSubmit = () => {
    console.log("submited");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="song">Song Title:</label>
        <input type="text" id="song" name="song" />
        <label for="artist">Artist:</label>
        <input type="text" id="artist" name="artist" />
        <lable for="songLength">Song length</lable>
        <input type="number" />
        <button type="submit">Add song to list</button>
      </form>
    </div>
  );
};

export default AddSong;
