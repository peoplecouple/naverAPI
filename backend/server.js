const express = require('express');
const app = express();
const path = require('path');
const router = require('./Router/router');
port = 5050;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/test', router);



app.listen(port, () => {
  console.log(`server listening ${port}`);
})
