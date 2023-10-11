const express = require('express')
const app = express()
const port = 9090

app.get('/getmessage', (req, res) => {
    res.send("Hello from backend!")
})

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`)
})