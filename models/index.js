const Sequelize = require('sequelize');
const Course = require('./course');
const Account = require('./account');
const User = require('./user');
const Enrollment = require('./enrollment');

const env = process.env.NODE_ENV || 'production';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.Account = Account;
db.Course = Course;
db.User = User;
db.Enrollment = Enrollment;

Account.init(sequelize);
Course.init(sequelize);
User.init(sequelize);
Enrollment.init(sequelize);

Account.associate(db);
Course.associate(db);
User.associate(db);
Enrollment.associate(db);

module.exports = db;