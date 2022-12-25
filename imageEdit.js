const { OpenAIApi } = require("openai");
const configuration = require("./config");
const openai = new OpenAIApi(configuration);
const fs = require("fs");

const editImage = async (images, text, n, size) => {
  try {
    const response = await openai.createImageEdit(
      fs.createReadStream(images[0]),
      fs.createReadStream(images[1]),
      text,
      n,
      size
    );
    console.log(response.data.data[0].url);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

module.exports = editImage;
