const test = require('tape');

const request = require('supertest');

const app = require('../src/app');

test('Home route (when not signed in)', t => {
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

test('Restricted routes should respond with 401 when signed out', t => {
  t.plan(2);
  request(app)
    .get('/singles')
    .expect(401)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      t.equal(res.statusCode, 401, '/singles');
    });
  request(app)
    .get('/edit-profile')
    .expect(401)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      t.equal(res.statusCode, 401, '/edit-profile');
    });
});

test('/sign-up (when not signed in)', t => {
  request(app)
    .get('/sign-up')
    .expect(200)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      t.equal(res.statusCode, 200, 'Status code is 200');
      t.error(err, 'No error');
      t.end();
    });
});

//test('Should be able to get a user by their id', t => {
  //const ids = ['1', '2', '3', '4'];
  //ids.forEach((id, index) => {
    //request(app)
      //.get(`/profile/${id}`)
      //.expect(200)
      //.expect('Content-Type', /json/)
      //.end((err, res) => {
        //t.same(res.statusCode, 200, 'Status code is 200');
        //t.error(err, 'No error');
        //t.same(res.body[0].id, id, `Id is ${id} as expected`);
        //if (ids.length - 1 === index) {
          //t.end();
        //}
      //});
  //});
//});

//test('Should add a new profile', t => {
  //const newuser = {id: 5, user_id: 5, name: 'Thor', species: null, image_url: null, cns: true, legs: '5', interests: 'interstellar ping-pong' };
  //request(app)
    //.post(`/editprofile`)
    //.send(newuser)
    //.expect(201)
    //.expect('Content-Type', /json/)
    //.end((err, res) => {
      //t.same(res.statusCode, 201, 'Status code is 201');
      //t.error(err, 'No error');
      //t.same(res.body[0].name, 'Thor', 'Should add new user profile to profiles table');
      //t.end();
    //});
//});
