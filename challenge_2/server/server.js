const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public')));

app.get('/prices/BTC/last_month', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then((btcPrices) => res.status(200).send(btcPrices.data))
  .catch((err) => res.status(404).send('error retrieving CoinDesk info: ', err))
})

app.get('/prices/BTC/:start_date/:end_date', (req, res) => {
  console.log('req params: ', req.params);
  const { start_date, end_date } = req.params;
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`)
  .then((btcPrices) => res.status(200).send(btcPrices.data))
  .catch((err) => res.status(404).send('error retrieving CoinDesk info: ', err))
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
