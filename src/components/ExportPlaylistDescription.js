import React, { useState } from "react";

const ExportPlaylistDescription = (props) => {
  const [exportDescription, setExportDescription] = useState(false);

  const handleExport = () => {
    setExportDescription(true);
    return;
  };
  return (
    <div>
      <button onClick={handleExport}>Export Description</button>
      {exportDescription ? (
        <div className="export-description">
          {props.currentSongList.map((song) => (
            <p>{song.textForDescription}</p>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ExportPlaylistDescription;
