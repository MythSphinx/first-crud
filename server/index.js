const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "cruddatabase",
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO cruddb.albums (albumname, bandname) VALUES ('parish', 'seether');";
  db.query(sqlInsert, (err, result) => {
    res.send("helloworld");
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
