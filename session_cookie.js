const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended : true}))

app.get("/", (req, res) => {
  res.send("Dashboard");
});

app.get("/profile", (req, res, next) => {
 res.send("profile")
});
