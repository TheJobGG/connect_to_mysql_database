const express = require('express');

// Connection from database.js file
const connection = require('./database');
const app = express();

app.get('/', (req, res) => res.send('<h1>Home</h1>'))

// Get all brands
app.get('/brand', (req, res) => {
  
  const query = 'SELECT * FROM brand;';
  queryData(res, query)
})

// Get all products
app.get('/products', (req, res) => {
  const query = 'SELECT * FROM product;';
  queryData(res, query)
})

// Get all users
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM user;';
  queryData(res, query)
})

// Get all products with his brand and who added it
app.get('/relation', (req, res) => {
  const query =
    `select product.id, product.name, brand.name, user.username created_by
  from brand, user
  join product
  where product.brand_id = brand.brand_id and product.created_by = user.id;`;
  queryData(res, query)
})


// Start express server and initialize connection to database
app.listen(3000, (req, res) => {
  console.log('App listening on port 3000');
  connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected to the MySQL server.');
  });
})


function queryData(res, query) {
  connection.query(query, (error, result) => {
    if (error) res.send('An error has occurred during querying with database.').statusCode(500)
    
    res.send(result)
  })
}

