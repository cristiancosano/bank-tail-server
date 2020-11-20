const express = require('express')
const app = express()
let port = process.env.PORT || 3000
console.log(port);
port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
