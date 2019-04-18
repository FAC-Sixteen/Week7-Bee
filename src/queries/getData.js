const dbConnection = require("../databases/db_connection.js");

const getUsername = (username) => {
  return new Promise((resolve, reject) => {
    dbConnection.query("SELECT username FROM users WHERE username = $1", [username],
  (err, res) => {
    if (err) reject(err);
    // console.log(res.rows);
    if (res.rows.length > 0) {
      resolve(false);
    } else {
      resolve(true);
    }
  })
  })
};

module.exports = {
  getUsername
}
