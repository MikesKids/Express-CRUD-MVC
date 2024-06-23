// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config(); // requiring the .env package and configure it.
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
