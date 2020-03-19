<<<<<<< HEAD
var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

// express.json and express.urlEncoded make it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

=======
var express = require ("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var path = require("path");
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "/public/home.html"));
});


app.listen(PORT, function (){
    console.log("App listening on PORT: " + PORT);
});
>>>>>>> 047ca7ac45f2df8f436645f22d7d289aee509b60
