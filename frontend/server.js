const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const { data } = await axios({
      method: 'GET',
      url: "localhost:9090/getmessage"
  });
  res.send(data)
})

app.listen(port, () => {
  console.log(`Frontend app listening on port ${port}`)
})