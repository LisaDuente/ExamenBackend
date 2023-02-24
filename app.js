const mySql = require("mysql2");

const express = require("express");
const app = express();
const port = 3000;

const connection = mySql.createConnection({
  host: "localhost",
  user: "examUser",
  password: "123123",
  port: 3000
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/getConnection", (req, res) => {
    connection.connect(function(err) {
        if (err) console.log(err);
        console.log("before connection")
        res.send({message: "Connected!"});
        console.log("after connection")
      });
  });