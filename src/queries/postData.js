const dbConnection = require("../dbConnection.js");

const postNewUser = (obj) => {
  return new Promise ((resolve, reject) => {
  dbConnection.query("INSERT INTO users(first_name, last_name, username, email, password) VALUES ($1, $2, $3, $4, $5)",
[
  obj.first_name,
  obj.last_name,
  obj.username,
  obj.email,
  obj.password
],
(err, res) => {
  if (err) {
    return cb(err);
  }
  cb(null);
}
);
  })
}

module.exports = {
  postNewUser
}
