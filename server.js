const express = require('express')
const proxy = require('express-http-proxy');
const request = require('request');
const qs = require('qs');
var expressStaticGzip = require("express-static-gzip");
const path = require('path');
const app = express();
const port = 3000;
const axios = require('axios');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

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
app.route('/qa/questions')
  .get((req, res) => {
    let productId = req.query.product_id;
    var config = {
      method: 'get',
      url: `http://localhost:8080/qa/questions?product_id=${productId}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    axios(config)
      .then(result => {
        res.send(result.data);
      })
      .catch(err => {
        res.send(err);
      })
    // console.log('req query', req.query);
    // const id = req.query.product_id;
    // console.log('id', id)
    // request({qs: id, uri: `http://localhost:8080/qa/questions/`}).pipe(res);
  })
  .post((req, res) => {
    console.log('req body', req.body)
    // let questionsId = req.params.question_id;
    var data = qs.stringify(req.body);
    var config = {
      method: 'post',
      url: `http://localhost:8080/qa/questions/`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    axios(config)
      .then(result => {
        res.send(JSON.stringify(result.data));
      })
      .catch(err => {
        res.send(err);
      })
  })

app.route('/qa/questions/:question_id/answers')
  .get((req, res) => {
    let questionsId = req.params.question_id;
    var data = qs.stringify({
      'page': '1',
      'count': '1'
    });
    var config = {
      method: 'get',
      url: `http://localhost:8080/qa/questions/${questionsId}/answers`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    axios(config)
      .then(result => {
        res.send(result.data);
      })
      .catch(err => {
        res.send(err);
      })
  })
  .post((req, res) => {
    console.log('req body', req.params)
    var data = qs.stringify(req.body);
    var config = {
      method: 'post',
      url: `http://localhost:8080/qa/questions/${req.params.question_id}/answers`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    axios(config)
      .then(result => {
        res.send(JSON.stringify(result.data));
      })
      .catch(err => {
        res.send(err);
      })
  })

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  var config = {
    method: 'put',
    url: `http://localhost:8080/qa/questions/${req.params.question_id}/helpful`,
    headers: { }
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
})

app.put('/qa/questions/:question_id/report', (req, res) => {
  var config = {
    method: 'put',
    url: `http://localhost:8080/qa/questions/${req.params.question_id}/report`,
    headers: { }
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
})

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  console.log('req body', req.params)
  var config = {
    method: 'put',
    url: `http://localhost:8080/qa/answers/${req.params.answer_id}/helpful`,
    headers: { }
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
})

app.put('/qa/answers/:answer_id/report', (req, res) => {
  console.log('req body', req.params)
  var config = {
    method: 'put',
    url: `http://localhost:8080/qa/answers/${req.params.answer_id}/report`,
    headers: { }
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})