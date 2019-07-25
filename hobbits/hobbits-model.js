const db = require("../data/db-config.js")

module.exports = {
    find,
    insert,
    remove
};

function find() {
    return db("hobbits")
}

function insert(hobbit) {
    return db("hobbits").insert(hobbit)
}

function remove(id) {
    return db("hobbits").where({ id }).del()
}