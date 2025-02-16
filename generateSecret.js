// Generate a Secret Key

// Put the following code into a file named generateSecret.js and run it with node
// generateSecret.js. Copy the output and replace <token secret> in the .env file.

const crypto = require('crypto');
const secret = crypto.randomBytes(64).toString('hex');
console.log(secret);
