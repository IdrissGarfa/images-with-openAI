const sharp = require("sharp");

const sharpImage = (inputFile, outputFile) => {
  sharp(inputFile)
    .resize({ width: 1040 })
    .toFile(outputFile)
    .then(function (newFileInfo) {
      console.log("Success, Imaged sharped and saved to " + outputFile);
    })
    .catch(function (err) {
      console.log("Error occured");
    });
};

module.exports = sharpImage;
