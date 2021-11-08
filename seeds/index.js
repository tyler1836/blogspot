const seedUsers = require('./user');
const seedPosts = require('./post');
const seedComment = require('./comment');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPosts();
  console.log('--------------');

  await seedComment();
  console.log('----------')

  process.exit(0);
};

seedAll();