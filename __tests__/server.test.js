

const supertest = require('supertest');
const { db } = require('../src/db');
const server = require('../src/server.js');

const request = supertest(server.app);

describe('Node Server', () => {
  it('says hello world', async () => {
    // set up the test so it can do a thing
    // Prepare the server
    // (see above)

    // perform an action, that does the thing
    // request the / route
    const response = await request.get('/'); // The response is a promise

    // assert or expect the result of the action
    // expect the / route to respond with hello
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World');
  });

  it('returns some data', async () => {
    const response = await request.get('/data');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: 'Danny',
      role: 'Student',
    });
  });


});
