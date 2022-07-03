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

app.listen(3001, () => {
  console.log("running on port 3001");
});
