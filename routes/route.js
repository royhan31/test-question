  const routeQuestion = require('./../controllers/QuestionController.js');


module.exports = app => {

  app.get('/question', routeQuestion.index);
  app.post('/question', routeQuestion.store);
  app.put('/question/:uuid', routeQuestion.update);
  app.delete('/question/:uuid', routeQuestion.destroy);
  app.get('/question/:uuid', routeQuestion.details);
};
