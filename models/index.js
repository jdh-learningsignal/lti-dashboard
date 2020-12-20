const Sequelize = require('sequelize');
const Course = require('./course');
const Account = require('./account');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.Account = Account;
db.Course = Course;

Account.init(sequelize);
Course.init(sequelize);

Account.associate(db);
Course.associate(db);

module.exports = db;