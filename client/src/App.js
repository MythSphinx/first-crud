import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [album, setAlbum] = useState("");
  const [band, setBand] = useState("");
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setAlbumList(response.data);
    });
  }, []);

  const submitBand = () => {
    Axios.post("http://localhost:3001/api/insert", {
      albumName: album,
      bandName: band,
    }).then(() => {
      alert.apply("succesful insert");
    });
  };

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>

      <div className="form">
        <label>Album:</label>
        <input
          type="text"
          name="album"
          onChange={(e) => {
            setAlbum(e.target.value);
          }}
        />
        <label>Band:</label>
        <input
          type="text"
          name="band"
          onChange={(e) => {
            setBand(e.target.value);
          }}
        />

        <button onClick={submitBand}>Submit</button>
        {albumList.map((val) => {
          return (
            <h1>
              Album Name: {val.albumname} | Band Name: {val.bandname}
            </h1>
          );
        })}
      </div>
    </div>
  );
}
export default App;
