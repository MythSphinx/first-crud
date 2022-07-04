const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "cruddatabase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM  albums";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const albumName = req.body.albumName;
  const bandName = req.body.bandName;

  const sqlInsert = "INSERT INTO albums (albumName, bandName) VALUES (?,?)";
  db.query(sqlInsert, [albumName, bandName], (err, result) => {
    console.log(result);
  });
});

app.delete("/api/delete/:id", (req, res) => {
  const name = req.params.id;
  const sqlDelete = "DELETE FROM albums WHERE albumName = ?";

  db.query(sqlDelete, name, (err, result) => {
    console.log(err);
  });
});

app.put("/api/update", (req, res) => {
  const name = req.body.albumName;
  const band = req.body.bandName;
  const sqlUpdate = "UPDATE albums SET bandname = ? WHERE albumName = ?";

  db.query(sqlUpdate, [band, name], (err, result) => {
    console.log(err);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
