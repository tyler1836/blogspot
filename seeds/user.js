const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@gmail.com',
    password: 'password'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@gmail.com',
    password: 'word123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;