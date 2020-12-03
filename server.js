const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      route = require('./routes/route.js'),
      swaggerUi = require('swagger-ui-express'),
      swaggerDocument = require('./swagger.json');

//cors origin and body parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// swagger ui
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//Routing
route(app);

module.exports = app;
