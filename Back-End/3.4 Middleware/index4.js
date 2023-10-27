import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(
    `<h1>Your band name is: </h1><h2>${req.body.street}${req.body.pet}</h2>`
  );
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
