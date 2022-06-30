const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crud_db",
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO albums (albumName, bandName) VALUES ('Isolate and Medicate', 'Seether')";
  db.query;
  res.send("Hello World");
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
