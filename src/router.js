const handler = require("./handler.js");

const notFoundPage = "<h1>404</h1>";

const router = (req, res) => {
  console.log(req.url)
  let endpoint = req.url;
  if (req.url.includes("public")) {
    // console.log(req.url)
    endpoint = req.url.slice(7);
  }
  switch (`${req.method} ${req.url}`) {
    case "GET /":
      handler.handleHome(res);
      break;
    case `GET /public${endpoint}`:
    console.log( 'this is inside switch')
      handler.handlePublic(req, res);
      break;
    case `POST /createuser`:
      handler.handleCreateUser(req, res);
      break;
    case `POST /login`:
      handler.handleLogin(req, res);
      break;
    default:
      res.writeHead(404, {
        "Content-Type": "text/html"
      });
      return res.end(notFoundPage);
  }
};

module.exports = router;
