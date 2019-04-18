const test = require("tape");
const runDbBuild = require("../databases/db_build");
const getData = require("../queries/getData");

test("Testing getData function getUsernameValid with existing", t => {
  runDbBuild
    .then(res => getData.getUsernameValid("hard_al"))
    .then(res => {
      t.equals(res, false, "Should return false");
      t.end();
    });
});

test("Testing getData function getUsernameValid without existing", t => {
  runDbBuild
    .then(res => getData.getUsernameValid("sdkljgsjdglskj"))
    .then(res => {
      t.equals(res, true, "Should return true");
      t.end();
    });
});

test("Testing getData function getUser", t => {
  runDbBuild
    .then(res => getData.getUser("hard_al"))
    .then(res => {
      t.equals(typeof res, "object", "should return object of user");
    })
    .then(res => getData.getUser("jhjhsjssdfj"))
    .then(res => {
      t.fail("shouldn't get here");
    })
    .catch(err => {
      t.equals(err, "Incorrect Username");
      t.end();
    });
});
