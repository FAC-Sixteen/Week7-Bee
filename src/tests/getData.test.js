const test = require("tape");
const runDbBuild = require("../databases/db_build");
const getData = require("../queries/getData");

test("Testing getData function getUsername with existing", t => {
  runDbBuild
    .then(res => getData.getUsername('hard_al'))
    .then(res => {
      t.equals(res, false, "Should return false");
      t.end();
     })
})

test("Testing getData function getUsername without existing", t => {
  runDbBuild
    .then(res => getData.getUsername('sdkljgsjdglskj'))
    .then(res => {
      t.equals(res, true, "Should return true");
      t.end();
     })
})
