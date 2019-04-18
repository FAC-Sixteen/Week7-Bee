const fs = require("fs");
const path = require("path");
const validate = require('./scripts/validate.js');
const getData = require('./queries/getData.js');
const postData = require('./queries/postData.js');
const hash = require('./scripts/hash.js');

const fakeInput = {
  first_name: "Burhanda",
  last_name: "Bobhanda",
  username: "mistapepper",
  email: "bobbysebolao@gmail.com",
  password: "qwerty101!Q",
  confirmed_password: "qwerty101!Q"
}

validate(fakeInput)
  .then((res) => console.log(res))
  .then((fakeInput) => console.log(fakeInput))
  .catch((err) => console.log(err))

// console.log(validate(fakeInput));

const handleHome = res => {
  fs.readFile(path.join(__dirname, "../public/index.html"), (err, file) => {
    if (err) {
      console.log(err);
      return err;
    }
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(file);
  });
};

const handlePublic = (req, res) => {
  const url = req.url;
  const extension = path.extname(url);
  console.log("this is the extension", extension);
  const extensionType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".ico": "image/vnd.microsoft.icon"
  };
  const filePath = path.join(__dirname, "..", url);
  console.log("this is the filepath", filePath);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.writeHead(200, { "Content-Type": extensionType[extension] });
      res.end(file);
    }
  });
};

const handleCreateUser = (req, res) => {
  promise.all(validate("TODO requestObject"), getData.getUsernameValid("TODO Username"))
    .then(response => hash.hashedPassword("TODO password"))
    .then(hash => postData.postNewUser(buildObject()))
    .then(response => {
      res.writeHead(302, {"Location": "/"});
      res.end();
    })
    .catch(err => {
    res.writeHead(302, { "Content-Type": "application/json", "Location": "/" })
    res.end(err);
  })
}


module.exports = {
  handleHome,
  handlePublic
};
