const express = require('express');
const _ = require('lodash');
const moment = require('moment');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  const array = [1, 2, 3];
  const reversedArray = _.reverse(array);
  res.send(`Hello, world! The current time is ${currentTime}. Here's a reversed array: ${reversedArray}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
