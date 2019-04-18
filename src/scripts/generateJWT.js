const jwt = require("jsonwebtoken");

const secret = "ya like jazz?";

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
