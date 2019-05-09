const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT | 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/coindesk', (req, res) => {
  res.send('connected to componentDidMount')
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
