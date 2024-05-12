const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/profile', (req, res) => {
  res.send('Hello user!')
})
app.get('/profile/:username', (req, res) => {
  res.send(`Hello From ${req.params.username}`)
})

app.listen(3000)