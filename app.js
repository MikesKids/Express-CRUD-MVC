// DEPENDENCIES
const express = require("express");
const bookmarksController = require("./controllers/bookmarksController");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});
app.use("/bookmarks", bookmarksController);

app.get("*", (request, response) => {
  response.json({ error: "Page not found" });
});

// EXPORT
module.exports = app;
