const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
var path = require("path");

app.use(express.static('public'))

app.get('/',function (req, res) {
  res.sendFile(path.join(__dirname,'public','views','index.html'));
});

app.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened... ', err)
  }
  console.log(`Server is listening on port :${port}`)
})
