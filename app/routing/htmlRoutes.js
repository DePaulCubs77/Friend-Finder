// Dependencies
// =============================================================
// Path package to get the correct file pathfor our html
var path = require('path');

// =============================================================
// Routing
// =============================================================

module.exports = function(app) {
	// HTML GET Requests
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------
 
	app.get("/", function (req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});

// Will send user to the survey when they type in /survey

	app.get("/survey", function (req, res) {
	res.sendFile(path.join(__dirname + "/..public/survey.html"));
	});

	// If no matching route is found default to home
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};