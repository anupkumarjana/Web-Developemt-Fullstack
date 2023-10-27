/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer
  .prompt([{ message: "Please enter your url: ", name: "url" }])
  .then((answers) => {
    const url = answers.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));
    fs.writeFile("URL.txt", url, (err) => {
      if (!err) {
        console.log("success");
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log("Sucess");
    }
  });
