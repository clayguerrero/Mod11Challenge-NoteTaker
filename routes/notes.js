const notesRoute = require("express").Router();
const path = require("path");


notesRoute.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes"));
});

module.exports = notesRoute;
