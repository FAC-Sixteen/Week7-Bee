const handler = require("./handler.js");

const notFoundPage = "<h1>404</h1>";

const router = (req, res) => {
  let endpoint = "";
  if (req.url.includes("public")) {
    endpoint = req.url.slice(7);
  }
  switch (`${req.method} ${req.url}`) {
    case "GET /":
      handler.handleHome(res);
      break;
    case `GET /public${endpoint}`:
      handler.handlePublic(req, res);
      break;
    default:
      res.writeHead(404, {
        "Content-Type": "text/html"
      });
      return res.end(notFoundPage);
  }
};

module.exports = router;
