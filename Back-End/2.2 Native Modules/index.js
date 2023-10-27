const { log } = require("console");
const fs = require("fs");

fs.writeFile("./message.txt", "hi,I'm Anup", (err) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("Success");
  }
});

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error");
  } else {
    console.log(data);
  }
});
