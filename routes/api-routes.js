// Set of routes for displaying and saving data to the database

// dependencies
const connection = require('../config/connection.js');
// dep added to support db promise
const mysql = require( 'mysql' );

// routes and promises
module.exports = function(app) {

    // constructor for db promises
    class Database {
        constructor( config ) {
            this.connection = mysql.createConnection( config );
        }
        query( sql, args ) {
            return new Promise( ( resolve, reject ) => {
                this.connection.query( sql, args, ( err, rows ) => {
                    if ( err )
                    return reject( err );
                    resolve( rows );
                } );
            } );
        }
        close() {
            return new Promise( ( resolve, reject ) => {
                this.connection.end( err => {
                    if ( err )
                    return reject( err );
                    resolve();
                } );
            } );
        };
    };

    // get all campaigns
    app.get('/api/allCampaigns', function(req, res) {
        var dbQuery = 'SELECT * FROM Campaigns';

        connection.query(dbQuery, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    });

    // get userId so we can add it to campaign-user pair
    app.get('/api/getUserId', function(req, res) {
        var dbQuery = 'SELECT UserId FROM Users';

        connection.query(dbQuery, function(err, result){
            if (err) throw err;
            res.json(result);
        });
    });

    // count users committed to each campaign
    app.get('/api/countCommits', function(req,res) {
        var dbQuery = 'SELECT COUNT(UserId) FROM CampaignsUsers WHERE CampaignId = ?';

        connection.query(dbQuery, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    });

    // add a campaign
    app.post('/api/newCampaign', function(req, res) {
        console.log('New campaign data:');
        console.log(req.body);

        var dbQuery = 'INSERT INTO Campaigns (CampaignName, CampaignDetails, CommitsNeeded, IsCommitted) VALUES (?,?,?,0)';

        connection.query(dbQuery, [req.body.CampaignName, req.body.CampaignDetails, req.body.CommitsNeeded, req.body.IsCommitted], function(err, result) {
            if (err) throw err;
            console.log('Campaign saved successfully');
            res.end;
        });
    });

    // add campaign-user pairs
    app.post('/api/newCampaignUserPair', function(req, res){
        console.log('New campaign-user pair:');
        console.log(req.body);

        var dbQuery = 'INSERT INTO CampaignsUsers (CampaignId, UserId) VALUES (?,?)';

        connection.query(dbQuery, [req.body.CampaignId, req.body.UserId], function(err, result) {
            if (err) throw err;
            console.log('Campaign-User pair saved successfully');
            res.end;
        });
    });

    // add new user
    app.post('/api/newUser', function(req, res){
        console.log('New user:');
        console.log(req.body);

        var dbQuery = 'INSERT INTO Users (UserName, UserType, Email, ZipCode) VALUES (?, "user", ?, ?)';

        connection.query(dbQuery, [req.body.UserName, req.body.UserType, req.body.Email, req.body.ZipCode], function(err, result) {
            if (err) throw err;
            console.log('New user saved successfully');
            res.end;
        });
    });
    
};