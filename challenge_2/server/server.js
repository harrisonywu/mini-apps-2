const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const app = express();

const port = process.env.PORT | 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/coindesk', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then((btcPrices) => res.status(200).send(btcPrices.data))
    .catch((err) => res.status(404).send('error retrieving CoinDesk info: ', err))
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
