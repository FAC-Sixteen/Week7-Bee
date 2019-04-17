const test = require("tape");
const runDbBuild = require("../databases/db_build");

test("testing databse build", t => {
  runDbBuild((err, res) => {
    t.equals(err, undefined, "error should be undefined");
    t.end();
  });
});
