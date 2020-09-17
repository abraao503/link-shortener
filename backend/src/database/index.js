const Sequelize = require('sequelize');
const Link = require('../models/Link');
const databaseConfig = require('../config/database');

class Database{
  constructor(){
    this.init();
  }
 
  init(){
    this.connection = new Sequelize(databaseConfig);
    
    Link.init(this.connection);
  }
}

module.exports = new Database();