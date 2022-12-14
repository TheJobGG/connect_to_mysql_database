require('dotenv').config();
const { createConnection } = require('mysql');

// Clean single quotes, double quotes, and commas from environment variables
const envVariables = {
  host: process.env.MYSQL_HOST.replace(/'|,|"/g, ''),
  user: process.env.MYSQL_USER.replace(/'|,|"/g, ''),
  password: process.env.MYSQL_PASSWORD.replace(/'|,|"/g, ''),
  database: process.env.MYSQL_DATABASE.replace(/'|,|"/g, ''),
}

// Create connection to database
const connection = createConnection({
  host: envVariables.host,
  user: envVariables.user,
  password: envVariables.password,
  database: envVariables.database,
});

// Export connection
module.exports = connection;