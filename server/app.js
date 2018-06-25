const express = require('express')
const app = express()

app.get('/api', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ message: "Hello client!" }, null, 3));
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))