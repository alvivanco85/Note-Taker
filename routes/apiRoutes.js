var notes = require("../db/data.js");

module.exports = function(app) {
  app.get("/api/notes", function(req,res) {
    res.json(notes);
  });

  
}