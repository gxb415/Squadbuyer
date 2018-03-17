var orm = require('../config/orm.js');

var squadbuyer = {
    home: function(cb) {
        orm.all('Campaigns', function(res) {
            cb(res);
        });
    },

    newCampaign: function(cols, vals, cb) {
        orm.create('Campaigns', cols, vals, function(res) {
            cb(res);
        });
    },

    newUser: function(cols, vals, cb) {
        orm.create('Users', cols, vals, function(res) {
            cb(res);
        });
    },

    makeCommit: function(objColVal, condition, cb) {
        orm.update("Campaigns", objColVal, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = squadbuyer;