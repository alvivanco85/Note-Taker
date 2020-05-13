var noteData = require("../db/data.js");
var fs = require("fs")

module.exports = function(app) {
  app.get("/api/notes", function(req,res) {
    res.json(noteData);
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    newNote.id = notes.length;
    notes.push(newNote);
    saveNotes();
    res.json({ ok: true });
});

app.delete("/api/notes/:id", function(req, res) {
  notes = notes.filter(note => note.id !== parseInt(req.params.id));
  saveNotes();
  res.json({ ok: true });
});

function saveNotes() {
  fs.writeFile("db/db.json", JSON.stringify(notes), function(err) {
    if (err) throw err;
    console.log("notes saved");
  });
}};