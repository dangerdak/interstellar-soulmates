const msg = require('../dictionary/errorMessages');

exports.client = (req, res) => {
  res.status(404).send(msg[404]);
};

exports.server = (err, req, res, next) => {
  res.status(500).send(msg[500]);
};
