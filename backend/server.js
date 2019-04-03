const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();

app.get('/',(req,res) => {
  res.send('Express server up and listening...');
});

app.listen(8181);
console.log('Express server up and listening...');
