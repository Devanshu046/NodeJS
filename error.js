const express = require("express");
const app = express();



app.get("/", (req, res) => {
  res.send("Dashboard");
});

app.get("/profile", (req, res , next) => {
  return next(new Error("something went wrong"))
  
});


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000)