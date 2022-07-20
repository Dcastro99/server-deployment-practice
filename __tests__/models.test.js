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
    let musicianType;
    it('can list a musician', async () => {
      let listMusicianRes = await request.get('/musician');
      expect(listMusicianRes.status).toBe(200);
      expect(listMusicianRes.body[0]).toHaveProperty('musicianType');
    });
    it('can update a musician', async () => {
      const updateRes = await request.put(`/musician/${musicianType}`);
      expect(updateRes.status).toBe(200);
    });
    it('can delete a musician', async () => {
      const deleteRes = await request.delete(`/musician/${musicianType}`);
      expect(deleteRes.status).toBe(200);
    });

  });

  describe('Golfer', () => {
    beforeEach(async () => {
      await db.sync();
    });
    let golferName;
    it('can list a golfer', async () => {
      let listGolferRes = await request.get('/golfer');
      expect(listGolferRes.status).toBe(200);
      expect(listGolferRes.body[0]).toHaveProperty('golferName');
    });
    it('can update a golfer', async () => {
      const upRes = await request.put(`/golfer/${golferName}`);
      expect(upRes.status).toBe(200);
    });
    it('can delete a golfer', async () => {
      const delRes = await request.delete(`/golfer/${golferName}`);
      expect(delRes.status).toBe(200);
    });


  });
});
