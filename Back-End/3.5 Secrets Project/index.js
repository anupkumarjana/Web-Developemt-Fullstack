//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let isUserAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

// var password= "ILoveProgramming"

function passwordCheck(req, res, next) {
  const fixedPassword = req.body["password"];
  if (fixedPassword == "anup7872") {
    isUserAuthorised = true;
  }
  next();
}
app.use(passwordCheck);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.post("/check", (req, res) => {
  if (isUserAuthorised) {
    res.sendFile(`${__dirname}/public/secret.html`);
  } else {
    res.redirect("/");
    // res.send("Please try again")
  }
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
