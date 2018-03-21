var connection = require("../config/connection.js");

var campaigns = {
    all: function (cb) {
        connection.all("campaigns", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        connection.create("campaigns", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        connection.update("campaigns", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        connection.delete("campaigns", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (sb_controllers.js).
module.exports = user;