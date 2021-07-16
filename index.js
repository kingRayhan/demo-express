const express = require("express");
const helmet = require("helmet");

const app = express();
app.use(helmet());

app.get("/", (req, res) => {
  res.json({
    message: "application is running",
  });
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
