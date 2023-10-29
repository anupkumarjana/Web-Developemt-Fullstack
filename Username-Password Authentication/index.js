const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  // Add more users as needed
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    res.send("Login successful.");
  } else {
    res.send("Login failed. Please check your username and password.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
