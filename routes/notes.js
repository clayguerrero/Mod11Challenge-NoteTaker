const notesRoute = require("express").Router();
const path = require("path");
const uuid = require('../helpers/uuid')


notesRoute.get("/notes", (req, res) => {
    //   res.sendFile(path.join(__dirname, "../public/notes"));
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

notesRoute.post('/api/notes', (req, res) => {
    readFromFile('./db/db.json')
})

module.exports = notesRoute;
