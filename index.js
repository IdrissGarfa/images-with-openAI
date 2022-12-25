const generateImage  = require('./generateImage');
const generateImageVariation  = require('./generateImageVariation');
const editImage = require('./imageEdit');
const sharpImage = require('./imageSharp');

// Generate images
// generateImage("metaverse", 1, "1024x1024");

// Edit images 
// editImage(['./png/rocket.png', './png/galaxy.png',], "dark age blood" ,1,  "1024x1024");

// Generate images variation

sharpImage("./png/galaxy.png", "./png/512x512/galaxy.png");

generateImageVariation("./png/512x512/galaxy.png", 1, "512x512");