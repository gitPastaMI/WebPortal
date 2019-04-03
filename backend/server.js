const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/',(req,res) => {
  res.send('Express server up and listening...');
});

app.post('/register', (req,res) => {
  console.log(req.body);
  res.send({msg:'Hit register endpoint : ' + req.body.username + ' ' + req.body.password});
});

app.listen(process.env.PORT || 8181);
console.log('Express server up and listening...');
