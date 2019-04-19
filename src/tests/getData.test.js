const test = require("tape");
const runDbBuild = require("../databases/db_build");
const getData = require("../queries/getData");

test("Testing getData function getUsername with existing", t => {
  runDbBuild
    .then(res => getData.getUsernameValid("hard_al"))
    .then(res => {
      t.fail("username should exist");
      t.end();
    })
    .catch(err => {
      t.equals(err, "Username already Exists", "Should return error message");
      t.end();
    });
});

test("Testing getData function getUsername without existing", t => {
  runDbBuild
    .then(res => getData.getUsernameValid("sdkljgsjdglskj"))
    .then(res => {
      t.equals(res, true, "Should return true");
      t.end();
    });
});
