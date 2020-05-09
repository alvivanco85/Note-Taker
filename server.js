var express = require("express");
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

// Initialize the app and create a port
var app = express();
var PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
