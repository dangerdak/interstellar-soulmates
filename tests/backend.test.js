const test = require('tape');

const request = require('supertest');

const app = require('../src/app');

test('Home route', t => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      t.equal(res.statusCode, 200, 'Status code is 200');
      t.error(err, 'No error');
      t.ok(res.text.includes('Sign In'), 'Home route responds with page containing \'Sign In\' text');
      t.end();
    });
});

test('Singles route', t => {
  request(app)
    .get('/singles')
    .expect(200)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      t.equal(res.statusCode, 200, 'Status code is 200');
      t.error(err, 'No error');
      t.ok(res.text.includes('Singles'), 'Singles route contains \'Singles\' text');
      t.end();
    });
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

test('Should add a new profile', t => {
  const newuser = {id: 5, user_id: 5, name: 'Thor', species: null, image_url: null, cns: true, legs: '5', interests: 'interstellar ping-pong' };
  request(app)
    .post(`/editprofile`)
    .send(newuser)
    .expect(201)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.same(res.statusCode, 201, 'Status code is 201');
      t.error(err, 'No error');
      t.same(res.body[0].name, 'Thor', 'Should add new user profile to profiles table');
      t.end();
    });
});
