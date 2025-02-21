/* jshint expr: true */

const chai = require("chai")
const expect = require("chai").expect
const Strategy = require("../lib/strategy")

describe("Strategy", function () {
  describe("passing request to verify callback", function () {
    const strategy = new Strategy({ passReqToCallback: true }, function (
      req,
      username,
      password,
      otp,
      done
    ) {
      if (username == "johndoe" && password == "secret") {
        return done(
          null,
          { id: "1234" },
          { scope: "read", foo: req.headers["x-foo"] }
        )
      }
      return done(null, false)
    })

    let user, info

    before(function (done) {
      chai.passport
        .use(strategy)
        .success(function (u, i) {
          user = u
          info = i
          done()
        })
        .req(function (req) {
          req.headers["x-foo"] = "hello"

          req.body = {}
          req.body.username = "johndoe"
          req.body.password = "secret"
        })
        .authenticate()
    })

    it("should supply user", function () {
      expect(user).to.be.an("object")
      expect(user.id).to.equal("1234")
    })

    it("should supply info", function () {
      expect(info).to.be.an("object")
      expect(info.scope).to.equal("read")
    })

    it("should supply request header in info", function () {
      expect(info.foo).to.equal("hello")
    })
  })
})
