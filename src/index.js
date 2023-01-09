const express = require('express')
const app = express()
app.use(express.static('article'))
app.listen(4000)
