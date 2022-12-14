require('dotenv').config();

const mysql = require('mysql');

const envVariables = {
  host:     process.env.MYSQL_HOST.replace(/'|,/g,''),
  user:     process.env.MYSQL_USER.replace(/'|,/g,''),
  password: process.env.MYSQL_PASSWORD.replace(/'|,/g,''),
  database: process.env.MYSQL_DATABASE.replace(/'|,/g,''),
}

const connection = mysql.createConnection({
    host: envVariables.host,
    user: envVariables.user,
    password: envVariables.password,
    database: envVariables.database,
});


module.exports = connection;