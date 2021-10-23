const express = require("express");
const app = express();
const PORT = 3750;

app.get("/", (req, res) => {
  res.send("I'm a GET HTTP request");
});
app.post("/:id", (req, res) => {
  res.send(`I'm a POST HTTP request ${req.params.id}`)
})
app.listen(PORT, () => {
  console.log(`Server is listening to: http://localhost:${PORT}`)
});
