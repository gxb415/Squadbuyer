var express = require('express');
var router = express.Router();
var squadbuyer = require('../models/app.js');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


router.get('/home', function(req, res) {
    squadbuyer.home(function(data) {
        res.render('index', { campaigns: data });
    });
});

router.post('/newCampaign', function(req, res) {
    squadbuyer.newCampaign(['campaign_title', 'description', 'commits_required'], [req.body.title, req.body.description, req.body.commitsNeeded], function() {
        res.redirect('/home');
    });
});

router.post('/home/newUser', function(req, res) {
    squadbuyer.newUser(['user_name', 'user_type', 'email', 'zip_code'], [req.body.username, req.body.type, req.body.email, req.body.zip], function() {
        res.redirect('/home');
    });
});

router.put('/home/commit/:id', function(req, res) {
    var condition = 'id=' + req.params.id;
    console.log('condition', condition);

    squadbuyer.makeCommit({ commits_made: req.body.commit }, condition, function() {
        res.redirect('/home');
    });
});



module.exports = router;