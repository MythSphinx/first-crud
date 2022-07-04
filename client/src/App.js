import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [album, setAlbum] = useState("");
  const [band, setBand] = useState("");
  const [albumList, setAlbumList] = useState([]);
  const [newBand, setNewBand] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setAlbumList(response.data);
    });
  }, []);

  const submitBand = () => {
    Axios.post("http://localhost:3001/api/insert", {
      albumName: album,
      bandName: band,
    });

    setAlbumList([...albumList, { albumname: album, bandname: band }]);
  };

  const deleteNames = (album) => {
    Axios.delete(`http://localhost:3001/api/delete/${album}`);
  };

  const updateNames = (album) => {
    Axios.put("http://localhost:3001/api/update/", {
      albumName: album,
      bandName: newBand,
    });
    setNewBand("");
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
            <div className="card">
              <h1>{val.albumname}</h1>
              <p>{val.bandname}</p>
              <button
                onClick={() => {
                  deleteNames(val.albumname);
                }}
              >
                Delete
              </button>
              <input
                type="text"
                id="updateInput"
                onChange={(e) => {
                  setNewBand(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  updateNames(val.albumname);
                }}
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
