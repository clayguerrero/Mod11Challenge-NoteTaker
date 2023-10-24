const indexRoute = require('express').Router()
const path = require('path')

// const notes = require()
indexRoute.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/index.html'))
})


module.exports = indexRoute
