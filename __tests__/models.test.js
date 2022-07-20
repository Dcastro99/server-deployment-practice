const supertest = require('supertest');
const { db } = require('../src/db');
const server = require('../src/server.js');

const request = supertest(server.app);

// clears our database

describe('models', () => {
  beforeEach(async () => {
    await db.sync();
  });

  // CREATES MUSICIAN
  it('creates a miusician', async () => {
    let response = await request.post('/musician').send({
      musicianType: 'Test musician',
      instrument: 'string',
    });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      musicianType: 'Test musician',
      instrument: 'string',
    });
  });

  //UPDATES MUSICIAN
  it('retrieves a musician', async () => {
    let createResponse = await request.post('/musician').send({
      musicianType: 'Test musician',
      instrument: 'string',
    });

    expect(createResponse.status).toBe(200);
    const createdId = createResponse.body.id;

    let retrieveResponse = await request.get(`/musician/${createdId}`);

    expect(retrieveResponse.status).toBe(200);
    expect(retrieveResponse.body).toMatchObject({
      id: createdId,
      musicianType: 'Test musician',
      instrument: 'string',
    });
  });

  //IT LISTS MUSICIAN
  let musicianType;
  it('can list a musician', async () => {
    let listMusicianRes = await request.get('/musician');
    expect(listMusicianRes.status).toBe(200);
    expect(listMusicianRes.body[0]).toHaveProperty('musicianType');
  });


  it('can delete a musician', async () => {
    const deleteRes = await request.delete(`/musician/${musicianType}`);
    expect(deleteRes.status).toBe(200);
  });



  // CREATES MUSICIAN
  it('creates a golfer', async () => {
    let response = await request.post('/golfer').send({
      golferName: 'Test golfer',
      golferCountry: 'string',
      worldRanking: '9',
    });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      golferName: 'Test golfer',
      golferCountry: 'string',
      worldRanking: '9',
    });
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
