var path = require("path")
var public = path.join(__dirname, "./public")

module.exports = function(app) {
    app.get('/index', function(req, res) {
        res.sendFile(path.join(public, "index.html"))
    })

    app.get('/notes', function(req, res) {
        res.sendFile(path.join(public, "notes.html"))
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(public, "index.html"))
    });

};

console.log("Test");