const request = require('supertest'); // << install this as -D

const server = require('./server.js'); // << the System Under Test (SUT)

describe("server", () => {
    it("db environment is set to testing", () => {
        expect(process.env.DB_ENV).toBe("testing")
    })

    describe("GET /", () => {
        it("Should return 200 OK", () => {
            return request(server)
            .get("/")
            .then(res => {
                expect (res.status).toBe(200)})
        })
    })
})