const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      route = require('./routes/route.js'),
      swaggerUi = require('swagger-ui-express'),
      swaggerDocument = require('./config/swagger.js');
      // swaggerDocument = require('./config/swagger.json');

// swagger ui
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//cors origin and body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Routing
route(app);

module.exports = app;
