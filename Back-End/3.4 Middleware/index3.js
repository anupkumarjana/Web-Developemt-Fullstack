import express from "express";

const app = express();
const port = 3000;

// ----------------------------my custom middleware-------------------------
function logger(req, res, next) {
  console.log("Requested method: " + req.method);
  console.log("Requested URl: " + req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
