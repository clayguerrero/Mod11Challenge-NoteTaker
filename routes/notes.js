const notesRoute = require("express").Router();
const path = require("path");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

notesRoute.get("/api/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});
notesRoute.post("/api/notes", (req, res) => {
  const { title, text } = req.body;
  const id = uuid()
  if (title && text) {
    const newNote = {
      title,
      text,
      id,
    };
    readAndAppend(newNote, "./db/db.json");
    const response = {
      status: "success",
      body: newNote,
    };
    res.json(response);
  } else {
    res.json("Error in posting Note");
  }
});

module.exports = notesRoute;
