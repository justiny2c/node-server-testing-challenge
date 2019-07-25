const request = require("supertest");

const db = require("../data/db-config.js")

const server = require("../api/server.js");

describe("hobbitsRouter", () => {

    beforeAll(async () => {
        await db('hobbits')
            .truncate();
      });

    describe("POST /hobbits", () => {
        it("should return 201 when posting hobbit", () => {
            return request(server)
                .post("/hobbits")
                .send({ name: "tyler" })
                .then(res => {
                    expect(res.status).toBe(201)
                })
        });

        it("should return hobbit id number", () => {
            return request(server)
                .post("/hobbits")
                .send({ name: "frank" })
                .then(res => {
                    expect(res.body[0]).toEqual(2)
                })
        })
    })    


    describe("GET /hobbits", () => {
        it("should return status 200", () => {
            return request(server)
                .get("/hobbits")
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it("should return the number of hobbits in db", () => {
            return request(server)
                .get("/hobbits")
                .then(res => {
                    expect(res.body).toHaveLength(2)
                })
        })
    })

    describe("DEL /hobbits/:id", () => {
        it("should return the number of deleted hobbit(s)", () => {
            return request(server)
                .del("/hobbits/1")
                .then(res => {
                    expect(res.body).toEqual(1)
                })
        })

        it("should return status 200", () => {
            return request(server)
                .del("/hobbits/2")
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })
        
});
