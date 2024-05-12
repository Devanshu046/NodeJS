const express = require("express");
const app = express();

app.set("view engine", "ejs")
app.use(express.static('./public'))

app.get("/", (req, res) => {
  res.render("index",{age:12});
});

app.get("/contact", (req, res) => {
  res.render("contact");
});



app.listen(3000)