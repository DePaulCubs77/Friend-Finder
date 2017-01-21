// Dependencies
//==============================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// =============================================================
// Sets up the Express
// =============================================================

// Tells node that we are creating an express server
var app = express();

// Sets an initial port
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// =============================================================
// Listener
// =============================================================

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// =============================================================
// Router
// =============================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);