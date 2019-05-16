const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const PORT = process.env.PORT || 4000;
const app = express();

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM products'
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'simple-react-sql-db'
});

connection.connect(err => {
  if(err) {
    return err;
  }
});


app.use(cors());

app.get('/', (req, res) => {
  res.send('go to Shop to see all the products')
});

app.get('/products/add', (req, res) => {
  const { 
    email,
    product_name, 
    product_description, 
    price 
  } = req.query;
    const INSERT_PRODUCTS_QUERY = `INSERT INTO products (email, product_name, product_description, price) VALUES ('${email}', '${product_name}', '${product_description}', ${price})`;
    connection.query(INSERT_PRODUCTS_QUERY, (err, results) => {
      if(err) {
          return res.send(err)
        } else {
          return res.send('successfully added!')
        }
    })
});

app.get('/products', (req, res) => {
  connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
    if(err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      })
    }
  });
});


app.listen(PORT, () => {
  console.log(`Products listening on port ${PORT}`);
});
