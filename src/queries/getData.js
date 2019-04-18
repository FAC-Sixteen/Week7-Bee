const dbConnection = require("../databases/db_connection.js");

const getUsernameValid = username => {
  return new Promise((resolve, reject) => {
    dbConnection
      .query("SELECT username FROM users WHERE username = $1", [username])
      .then(res => {
        if (res.rows.length > 0) {
          reject('Username already Exists');
        } else {
          resolve(true);
        }
      })
      .catch(err => reject(err));
  });
};

const getUser = username => {
  return new Promise((resolve, reject) => {
    dbConnection
      .query("SELECT * FROM users WHERE username = $1", [username])
      .then(res => {
        if (!res.rows[0]) reject("Incorrect Username");
        resolve(res.rows[0]);
      });
  });
};

module.exports = {
  getUsernameValid,
  getUser
};
