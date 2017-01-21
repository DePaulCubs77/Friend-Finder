// Load Data
// ==============================================

// Here we are linking our routes to "data" sources
var surveyData = require("../data/friends.js");
var bodyParser = require("body-parser");
var path = require("path");

// ===============================================
// Routing
// ===============================================

// API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the surveyData)
  // ---------------------------------------------------------------------------
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(surveyData);
	});

	app.post("/api/", function(req, res) {
		var friendData = req.body;
		console.log(req.body);


	});
};