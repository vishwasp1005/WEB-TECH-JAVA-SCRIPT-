const express = require('express')
const app = express()

app.get('/about', function (req, res) {
  res.send('about this page')
})
app.get('/contectus', function (req, res) {
  res.send('contect us with this page')
})
app.get('/home', function (req, res) {
  res.send('home')
})
console.log("start express")

app.listen(4000)

