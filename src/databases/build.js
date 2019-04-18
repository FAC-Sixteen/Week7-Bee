const runDbBuild = require("./db_build");

runDbBuild
  .then(res => {process.stdout.write("build success")})
  .catch(err => {process.stdout.write("build failed")});
