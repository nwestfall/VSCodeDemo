const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let msg = "Hello World!"
    res.send(msg)
})

app.listen(port, () => {
    let msg = `Example app listening on port ${port}!`
    console.log(msg)
})