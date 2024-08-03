const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('userAuth', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connected');
  } catch (err) {
    console.error('Unable to connect to MySQL:', err);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
