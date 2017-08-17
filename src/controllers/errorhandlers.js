

exports.client = (req, res) => {
  res.send("404: Not Found");

};

exports.server = (err, req, res, next) => {
  res.send("500: Sorry, we've had a problem on our end")
};
