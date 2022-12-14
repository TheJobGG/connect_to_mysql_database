const express = require('express');
const connection = require('./database');

const app = express();

app.get('/', (req, res) => res.send('<h1>Home</h1>'))

app.get('/brand', (req, res) => {
  const query = 'SELECT * FROM brand;';
  queryData(req, res, query)
})

app.get('/products', (req, res) => {
  const query = 'SELECT * FROM product;';
  queryData(req, res, query)
})

app.get('/users', (req, res) => {
  const query = 'SELECT * FROM user;';
  queryData(req, res, query)
})

app.get('/relation', (req, res) => {
  const query =
    `select product.id, product.name, brand.name, user.username created_by
  from brand, user
  join product
  where product.brand_id = brand.brand_id and product.created_by = user.id;`;
  queryData(req, res, query)
})



app.listen(3000, (req, res) => {
  console.log('App listening on por 3000');
  connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected to the MySQL server.');
  });
})




function queryData(req, res, query) {
  connection.query(query, (error, result) => {
    if (error) throw Error('An error has occurred during querying with database.')
    
    res.send(result)
  })
}

