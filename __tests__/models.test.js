const supertest = require('supertest');
const { db } = require('../src/db');
const server = require('../src/server.js');

const request = supertest(server.app);

// clears our database

describe('models', () => {
  beforeEach(async () => {
    await db.sync();
  });
  describe('Musician', () => {
    beforeEach(async () => {
      await db.sync();
    });
    it('can list a musician', async () => {
      let listMusicianRes = await request.get('/musician');
      expect(listMusicianRes.status).toBe(200);
      expect(listMusicianRes.body[0]).toHaveProperty('musicianType');
    });

  });

  describe('Golfer', () => {
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
