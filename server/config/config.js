require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_DEVELOPMENT_USERNAME,
    "password": process.env.DB_DEVELOPMENT_PASSWORD,
    "database": process.env.DB_DEVELOPMENT_DATABASE,
    "host": process.env.DB_DEVELOPMENT_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_TEST_USERNAME,
    "password": process.env.DB_TEST_PASSWORD,
    "database": process.env.DB_TEST_DATABASE,
    "host": process.env.DB_TEST_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_PRODUCTION_USERNAME,
    "password": process.env.DB_PRODUCTION_PASSWORD,
    "database": process.env.DB_PRODUCTION_DATABASE,
    "host": process.env.DB_PRODUCTION_HOST,
    "dialect": "mysql"
  }
}

