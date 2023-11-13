// config.js
const dotenv = require('dotenv');
dotenv.config({
    path: '../../.env'
})
console.log(process.env.DB_URI)
console.log("hello env",)
module.exports = {
  dbUri: process.env.DB_URI || 'your_default_database_uri',
  secretKey: process.env.SECRET_KEY || 'your_default_secret_key',
};

