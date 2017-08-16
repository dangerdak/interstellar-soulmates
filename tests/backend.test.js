const test = require('tape');

const request = require('supertest');

const app = require('../src/app');

test( 'initial test', t=> {
  t.equal(1,1, '1 should equal 1');
  t.end();
});
test('All routes should return the expected results', t => {
  request(app)
    .get('/users')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200');
      t.error(err, 'No error');
      t.end();
    });
});
test('Should be able to get a user by their id', t => {
  const ids = ['1', '2', '3', '4'];
  ids.forEach((id, index) => {
    request(app)
      .get(`/user/${id}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        t.same(res.statusCode, 200, 'Status code is 200');
        t.error(err, 'No error');
        t.same(res.body[0].id, id, `Id is ${id} as expected`);
        if (ids.length - 1 === index) {
          t.end();
        }
      });
  });
});
