const config = {
  database: `mongodb://${process.env.REACT_APP_DB_URL}:27017/my-trello-db`,
  host: 'localhost',
  port: 5000,
  authentication: {
    secret: `${process.env.REACT_APP_AUTH_SECRET}`
  }
};

module.exports = config;
