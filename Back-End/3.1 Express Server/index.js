import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Hi! This is Anup!</h1>`);
});
app.get("/home", (req, res) => {
  res.send(`<h1>Hi! This is Home!</h1>`);
});
app.get("/about", (req, res) => {
  res.send(`<h1>Hi! This is About!</h1>`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
