const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('Magic and aliens running on port', app.get('port'));
});
