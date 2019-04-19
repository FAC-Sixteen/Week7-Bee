const dbConnection = require("../databases/db_connection.js");

const postNewUser = obj => {
  return new Promise((resolve, reject) => {
    dbConnection
      .query(
        "INSERT INTO users(first_name, last_name, username, email, password) VALUES ($1, $2, $3, $4, $5)",
        [obj.first_name, obj.last_name, obj.username, obj.email, obj.password]
      )
      .then(res => {
        console.log("New user added to database ");
        resolve(true);
      })
      .catch(err => reject(err));
  });
};
// const fakeInput = {
//   first_name: "Burhanda",
//   last_name: "Bobhanda",
//   username: "mistapepper",
//   email: "bobbysebolao@gmail.com",
//   password: "qwerty101!Q",
//   confirmed_password: "qwerty101!Q"
// }

// console.log('this is >>>>>>',postNewUser(fakeInput));

module.exports = {
  postNewUser
};
