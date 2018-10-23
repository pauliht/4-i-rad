// Require
const express = require('express');
const flexjson = require('jsonflex')();
const compression = require('compression');

// Create express server
const app = express();

// Express middleware
app.use(compression());
app.use(flexjson);
app.use(express.static('www'));

// Start server
app.listen(3200, () =>
  console.log('Webserver listening on port 3000')
);
