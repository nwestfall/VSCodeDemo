const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var msg = "Hello World!"
    res.send(msg)
})

app.listen(port, () => {
    var msg = `Example app listening on port ${port}!`
    console.log(msg)
})