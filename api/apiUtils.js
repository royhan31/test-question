exports.ok = function(values, res) {
  res.json(values).end();
};

exports.failed = function(message, errors, res){
  const data = { message, errors };
  res.json(data).end();
}
