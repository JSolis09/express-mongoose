const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

require('./database');

const app = express();
const port = 7777;
app.use('/api', router);

app.listen(port, function() {
    console.log('Server is up and running on port numner ' + port);
});
