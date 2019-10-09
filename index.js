const express = require('express')
const moment = require('moment')
const _ = require('lodash')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => { 
    const currentDateTime = moment()
    const content = `Hello World!<br/>${currentDateTime.format()}`
    res.send(_.toUpper(content))
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))