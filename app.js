// Imports

const express = require("express");
const postRouter = require("./routers/posts");

// Express app config
const app = express();
const port = 3000;

// Static assets
app.use(express.static("public"));

// Routers
app.use(postRouter);

app.listen(port, () => {
  console.log("Server listening on http://localhost:" + port);
});
