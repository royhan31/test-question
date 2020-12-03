const response = require('./../api/apiUtils'),
    { Question }  = require('./../models'),
    {getPagination, getPagingData} = require('./../helpers/pagination'),
    { v4: uuidv4 } = require('uuid');

exports.index = async (req, res) => {

  const { size, page } = req.query;
  const { limit, offset } = getPagination(size, page);
  console.log(limit, offset);
  const questions = await Question.findAndCountAll({
    limit,
    offset,
    attributes: ['uuid','question','createdBy','updatedBy','createdAt','updatedAt'],
    order: [
      ['createdAt', 'DESC']
    ]
  }).then(data => data)
    .catch(err => {
      res.status(500);
      response.failed('Failed get all question',err,res);
      return
    });

  const questionData = getPagingData(questions, page, limit);

  res.status(200);
  response.ok(questionData, res);
}

exports.store = (req, res) => {
  const { question, author } = req.body;
  Question.create({ uuid: uuidv4(), question, createdBy: author },
    { skip: ['updatedBy'], raw: false})
    .then(() => {
      res.status(201);
      response.ok({message: "Question has been created"}, res);
    })
    .catch(err => {
    response.failed('Create question failed',err,res);
  });
}

exports.update = (req, res) => {
  const { uuid } = req.params;
  const { question, author } = req.body;

  Question.update({question, updatedBy: author},{where: { uuid }})
          .then(data => {
            if(data > 0) {
              res.status(200);
              response.ok({message: "Question has been updated"}, res);
            }else {
              const errors = {message: "UUID not found"};
              response.failed('Update question failed',errors,res);
            }
          })
          .catch(err => response.failed('Update question failed',err,res))
}

exports.destroy = (req, res) => {
  const { uuid } = req.params;
  Question.destroy({ where: { uuid } })
          .then(data => {
            if(data > 0) {
              res.status(200);
              response.ok({message: "Question has been deleted"}, res);
            }else {
              const errors = {message: "UUID not found"};
              response.failed('Delete question failed',errors,res);
            }
          })
          .catch(err => response.failed('Delete question failed',err,res))
}

exports.details = async (req, res) => {
  const { uuid } = req.params;
  const question = await Question.findOne({ where: { uuid }})
                  .then(data => data)
                  .catch(err => response.failed('Details question failed',err,res))

  res.status(200);
  response.ok(question == null ? [] : question, res);
}
