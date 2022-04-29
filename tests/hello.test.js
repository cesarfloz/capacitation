const asserts = require("assert");
const request = require("supertest");
const app = require("../index");

describe("hello test", () => {
    it("test saludo responce", (done) => {
        request(app)
            .get("/hello")
            .timeout(200000)
            .end((error, response) => {
                console.log(response.body);
                console.log(error);
                asserts(response.body === "hello");
                done();
            });
    });
});