var express = require('express');
var app = express();
var birds = require('./routes/a');
const port = 7777

app.use('/a', birds);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})