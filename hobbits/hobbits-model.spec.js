const db = require('../data/db-config.js');

const Hobbits = require('./hobbits-model.js');

describe('hobbits model', () => {
    beforeEach(async () => {
      await db('hobbits').truncate();
    });

    describe("insert()", () => {
        it("should insert hobbit into db", async () => {
          await Hobbits.insert({ name: "guillermo" })
          await Hobbits.insert({ name: "kevin" })
          
          const hobbits = await db("hobbits");

          expect(hobbits).toHaveLength(2)
        });

        it("should return hobbit object", async () => {
          await Hobbits.insert({ name: "george" })

          const hobbits = await db("hobbits");

          expect(hobbits[0].name).toEqual( "george" )
        })
    })
})