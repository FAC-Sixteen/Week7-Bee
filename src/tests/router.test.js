const test = require("tape");
const supertest = require("supertest");
const router = require("../router");
const runDbBuild = require("../databases/db_build");

password = "testpass";

runDbBuild.then(res => {
  test("Home route", t => {
    supertest(router)
      .get("/")
      .expect(200)
      .expect("Content-Type", /html/)
      .end((err, res) => {
        t.error(err, "error should be null");
        t.equal(
          res.text.includes("<!DOCTYPE html>"),
          true,
          "response should contain <!DOCTYPE html>'"
        );
        t.end();
      });
  });

  test("Login route", t => {
    supertest(router)
      .post("/login")
      .expect(302)
      .end((err, res) => {
        t.error(err, "error should be null");
        t.equal(res.status, 302, "should get redirect");
        t.end();
      });
  });
});
