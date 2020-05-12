var path = require("path")
var fs = require("fs")
var noteData = path.join(__dirname, "./db/db.json") //returns a string

module.exports = function(app) {
//displays all notes. The readFileSync does this synchronously so that
//it happens before other functions run to make sure data is present
var notes;
fs.readFile(noteData, "utf8", function(err, data) {
  notes = JSON.parse(data);
});

app.get("/api/notes", function(req, res) {
  res.json(notes);
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