const express = require("express");
const app = express();

app.set("view engine", "ejs")
app.use(express.static('./public'))

app.get("/", (req, res) => {
  res.render("index",{age:12});
});
app.get("/error", (req, res , next) => {
    throw ("something went wrong")
  
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(3000)