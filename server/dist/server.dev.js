"use strict";

var express = require('express');

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var dotenv = require('dotenv');

dotenv.config();
var app = express();
var port = 5001;

var cors = require('cors');

var _require = require('express-oauth2-jwt-bearer'),
    auth = _require.auth;

var jwtCheck = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: process.env.TOKEN_SIGNING_ALG
});
var uri = process.env.MONGODB_URI;

var playerRoute = require('./routes/PlayerRoutes/PlayerRoutes');

var gameRoute = require('./routes/GameRoutes/GameRoutes');

var playerStatusRoute = require('./routes/PlayerStatusRoutes/PlayerStatusRoutes'); // database connection


function connect() {
  return regeneratorRuntime.async(function connect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 3:
          console.log('Connected to MongoDB');
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error('Error connecting to MongoDB');

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

connect();
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(bodyParser.json({
  limit: '50mb'
}));
var corsOptions = {
  origin: 'https://fnlhockey.com',
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions)); // enforce on all endpoints

app.use(jwtCheck);
app.use('/players', playerRoute);
app.use('/games', gameRoute);
app.use('/playerStatus', playerStatusRoute);
app.listen(process.env.PORT || port, function () {
  console.log("Node.js server is running on port ".concat(port));
});