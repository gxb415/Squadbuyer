DROP DATABASE IF EXISTS usercampaigns_db;

CREATE DATABASE usercampaigns_db;
USE usercampaigns_db;

/* Creates table for Users */
CREATE TABLE Users (
    UserId INTEGER AUTO_INCREMENT,
    UserName VARCHAR(255) NOT NULL,
    UserType VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    ZipCode INTEGER(10) NOT NULL,
    PRIMARY KEY(UserId)
    );

/* Creates table for Campaigns */
CREATE TABLE Campaigns (
    CampaignId INTEGER AUTO_INCREMENT,
    CampaignName VARCHAR(255) NOT NULL,
    CampaignDetails VARCHAR(255) NOT NULL,
    CommitsNeeded VARCHAR(255) NOT NULL,
    IsCommitted TINYINT unsigned NOT NULL DEFAULT 0,
    PRIMARY KEY(CampaignId)
    );

/* Creates table to store association of Users and Campaigns */
CREATE TABLE CampaignsUsers (CampaignId INTEGER, UserId INTEGER);

/* Adding users */
INSERT INTO Users (UserId, UserName, UserType, Email, ZipCode) 
VALUES ('1', 'swapnil', 'consumer', '987@mailinator.com', '12345'),
('2', 'joe', 'business', '986@mailinator.com', '34567'),
('3', 'shawna', 'consumer', '985@mailinator.com', '23456');

/* Adding Campaigns */
INSERT INTO Campaigns (CampaignId, CampaignName, CampaignDetails, CommitsNeeded, IsCommitted) 
VALUES ('1', 'black friday', 'blah blah', '10', '0'),
('2', 'cyber monday', 'blah blah blah', '20', '1'),
('3', 'summer sale', 'blah blah bleh bleh', '30', '0');

/* Adding associations */
-- INSERT INTO CampaignsUsers (CampaignId, UserId) VALUES ('campaign1', 'user1');
-- INSERT INTO CampaignsUsers (CampaignId, UserId) VALUES ('campaign1', 'user2');
-- INSERT INTO CampaignsUsers (CampaignId, UserId) VALUES ('campaign2', 'user3');   

/* Show number of users per Campaign and arrange in desc order */
SELECT CampaignId, COUNT(UserId)
FROM CampaignsUsers
GROUP BY CampaignId
ORDER BY COUNT(UserId) DESC;

/* Show Campaigns with more than 1 users */
SELECT Campaigns.CampaignName, COUNT(CampaignsUsers.UserId)
FROM CampaignsUsers
INNER JOIN Campaigns ON CampaignsUsers.CampaignId = Campaigns.CampaignId
GROUP BY CampaignsUsers.CampaignId
HAVING COUNT(CampaignsUsers.UserId) > 0;