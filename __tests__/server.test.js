// Assertion - check to see if something is what we expect

// expect(true).toBe(true); // SGTM
// expect(3).toBe(5); // ?? sus

// test organization - describe, it
//   describe groups tests
//   it is a single test case
// test setup

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

  describe('Users', () => {
    beforeEach(async () => {
      await db.sync();
    });
    it('can list a musician', async () => {
      let listMusicianRes = await request.get('/musician');
      expect(listMusicianRes.status).toBe(200);
      expect(listMusicianRes.body[0]).toHaveProperty('musicianType');
    });

  });

  describe('Users', () => {
    beforeEach(async () => {
      await db.sync();
    });
    it('can list a golfer', async () => {
      let listGolferRes = await request.get('/golfer');
      expect(listGolferRes.status).toBe(200);
      expect(listGolferRes.body[0]).toHaveProperty('golferName');
    });

  });
});
