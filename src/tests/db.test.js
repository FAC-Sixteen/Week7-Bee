const test = require("tape");
const runDbBuild = require("../databases/db_build");

test("testing databse build", t => {
  runDbBuild
    .then(res => {
      t.equals(res, true, "Should return true");
      t.end();
    })
    .catch(err => { t.fail("database build failed") });
});
