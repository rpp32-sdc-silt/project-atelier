const express = require('express')
var expressStaticGzip = require("express-static-gzip");
const path = require('path');
const app = express();
const port = 3000;
const axios = require('axios');

app.use("/", expressStaticGzip(path.join(__dirname, 'client', 'dist'), {
  enableBrotli: true
}));

app.get('/', (req, res) => {
  res.end()
})

app.get('/products', (req, res) => {
  axios.get('http://localhost:8080/products')
    .then(result => {
      console.log('result for products', result.data);
      res.send(result.data);
    })
    .catch(err => {
      res.send(err);
    })
})

app.get('/products/:product_id', (req, res) => {
  let productId = req.params.product_id;
  axios.get(`http://localhost:8080/products/${productId}`)
    .then(result => {
      console.log('result for product id', result.data);
      res.send(result.data);
    })
    .catch(err => {
      res.send(err);
    })
})

app.get('/products/:product_id/styles', (req, res) => {
  let productId = req.params.product_id;
  axios.get(`http://localhost:8080/products/${productId}/styles`)
    .then(result => {
      console.log('result for styles', result.data);
      res.send(result.data);
    })
    .catch(err => {
      res.send(err);
    })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})