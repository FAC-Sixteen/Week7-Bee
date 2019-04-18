const jwt = require("jsonwebtoken");
require("env2")("./config.env");

const secret = process.env.SECRET;

var generateToken = (obj) => {
  return new Promise((resolve, reject) => {
  jwt.sign(obj, secret)
    .then(token => resolve(token))
});
}:

// const sign = (obj, secret) => {
//   return new Promise
//
//
//   ---
//
//   resolve(stuff)
// }
//
// generateToken(obj)
//   .then(token => console.log(token))
