var mysql = require("mysql");
var User = require('../models/app.js');

//Require the dependencies
var chai = require('chai');
var server = require('../server');
var should = chai.should();
//use chai-http to help things move along
chai.use(chaiHttp);
describe('Users', () => {
    //we are writing a function to do this before anything
    beforeEach((done) => { //Before each test we empty the database
        User.remove({}, (err) => {
            done();
        });
    });
    
      //Test the /GET route
      //if the result is status 200 and the result from the requet is zero, then the test works
    describe('/GET getUserID', () => {
        it('it should GET all the users', (done) => {
            chai.request(server)
                .get('/models')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

});