const { OpenAIApi } = require("openai");
const configuration = require("./config");
const openai = new OpenAIApi(configuration);

const generateImage = async (prompt, n, size) => {
  try {
    const response = await openai.createImage({
      prompt,
      n,
      size,
    });
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

module.exports = generateImage;
