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
app.use(express.static("public")); //for rendering css too


function passwordCheck(req, res, next) {
  const fixedPassword = "anup7872"; // Define the correct password
  const fixedUserName = "anupkumarjana"; // Define the correct username

  // Get username and password from the request
  const enteredPassword = req.body["password"];
  const enteredUserName = req.body["username"];

  if (enteredPassword === fixedPassword && enteredUserName === fixedUserName) {
    isUserAuthorised = true;
    // Authentication is successful
    console.log("Successfully logged in");
  } 
  else if (enteredPassword !== fixedPassword) {
    // Incorrect password
    console.log("Wrong Password");
  } else if (enteredUserName !== fixedUserName) {
    // Incorrect username
    console.log("Wrong Username");
  }

  next();
}
app.use(passwordCheck);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
 
});

app.post("/check", (req, res) => {
  if (isUserAuthorised==true) {
    res.sendFile(`${__dirname}/public/secret.html`);
  } else {
    // Display an alert message in the browser
    res.send('<script>alert("Wrong Username or Password"); window.location="/";</script>');
  }
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
