DROP DATABASE IF EXISTS profilesdb;
CREATE DATABASE profilesdb;

USE profilesdb;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS Users; 
		
CREATE TABLE Users (
  id INTEGER NULL AUTO_INCREMENT DEFAULT 1000,
  user_name VARCHAR(111) NULL DEFAULT NULL,
  email VARCHAR(111) NULL DEFAULT NULL,
  zip_code INTEGER(11) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Backers'
-- 
-- ---

DROP TABLE IF EXISTS Backers;
		
CREATE TABLE Backers (
  user_id INTEGER NULL DEFAULT NULL,
  campaign_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY ()
);

-- ---
-- Table 'Campaigns'
-- 
-- 

DROP TABLE IF EXISTS Campaigns;
		
CREATE TABLE Campaigns (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  campaign_category VARCHAR(111) NULL DEFAULT NULL,
  campaign_title VARCHAR(222) NULL DEFAULT NULL,
  campaign_description VARCHAR(999) NULL DEFAULT NULL,
  commits_required INTEGER(11) NULL DEFAULT NULL,
  commits_made INTEGER(11) NULL DEFAULT NULL AUTO_INCREMENT,
  goal_met BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE Backers ADD FOREIGN KEY (user_id) REFERENCES Users (id);
ALTER TABLE Backers ADD FOREIGN KEY (campaign_id) REFERENCES Campaigns (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE 'Users' ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE 'Backers' ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE 'Campaigns' ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO 'Users' ('id','user_name','user_type','email','zip_code') VALUES
-- ('','','','','');
-- INSERT INTO 'Backers' ('user_id','campaign_id') VALUES
-- ('','');
-- INSERT INTO 'Campaigns' ('id','campaign_title','description','commits_required') VALUES
-- ('','','','');