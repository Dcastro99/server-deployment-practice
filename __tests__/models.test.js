const supertest = require('supertest');
const { db } = require('../src/db');
const server = require('../src/server.js');


const request = supertest(server.app);

// clears our database

describe('models', () => {
  beforeEach(async () => {
    await db.sync();
  });




  // CREATES MUSICIAN//////////////////
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

  //GRABS A MUSICIAN
  it('retrieves a musician', async () => {
    let createResponse = await request.post('/musician').send({
      musicianType: 'Test musician',
      instrument: 'string',
    });

    expect(createResponse.status).toBe(200);
    const createdId = createResponse.body.id;

    let retrieveResponse = await request.get(`/musician/${createdId}`);
    console.log(retrieveResponse.body);
    expect(retrieveResponse.status).toBe(200);
    expect(retrieveResponse.body).toMatchObject({
      id: createdId,
      musicianType: 'Test musician',
      instrument: 'string',
    });
  });

  //IT LISTS MUSICIAN

  it('can list a musician', async () => {
    let listMusicianRes = await request.get('/musician');
    expect(listMusicianRes.status).toBe(200);
    expect(listMusicianRes.body[0]).toHaveProperty('musicianType');
  });

  //IT UPDATES MUSICIAN
  it('can update a musician', async () => {
    let createResponse = await request.post('/musician').send({
      musicianType: 'Test musician',
      instrument: 'string',

    });

    expect(createResponse.status).toBe(200);
    const createdId = createResponse.body.id;

    const updateRes = await request.put(`/musician/${createdId}`).send({ musicianType: 'bob' });
    expect(updateRes.status).toBe(200);
  });


  //IT DELETES MUSICIAN
  it('deletes a musician', async () => {
    let createResponse = await request.post('/musician').send({
      musicianType: 'Test musician',
      golferCountry: 'string',

    });

    expect(createResponse.status).toBe(200);
    const createdId = createResponse.body.id;

    let retrieveResponse = await request.delete(`/musician/${createdId}`);
    expect(retrieveResponse.status).toBe(200);
  });




  // CREATES GOLFER/////////////////////////
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

  //GRABS A GOLFER
  it('retrieves a golfer', async () => {
    let createResponse = await request.post('/golfer').send({
      golferName: 'Test golfer',
      golferCountry: 'string',
      worldRanking: '9',
    });

    expect(createResponse.status).toBe(200);
    const createdId = createResponse.body.id;

    let retrieveResponse = await request.get(`/golfer/${createdId}`);

    expect(retrieveResponse.status).toBe(200);
    expect(retrieveResponse.body).toMatchObject({
      id: createdId,
      golferName: 'Test golfer',
      golferCountry: 'string',
      worldRanking: Number(9),
    });
  });

  //IT LISTS GOLFER

  it.skip('can list a golfer', async () => {
    let listGolferRes = await request.get('/golfer');
    expect(listGolferRes.status).toBe(200);
    expect(listGolferRes.body[0]).toHaveProperty('golferName');
  });



  //IT UPDATES GOLFER
  it('can update a golfer', async () => {
    let createResponse = await request.post('/golfer').send({
      golferName: 'Test golfer',
      golferCountry: 'string',
      worldRanking: '9',
    });

    expect(createResponse.status).toBe(200);
    const createdId = createResponse.body.id;

    const updateRes = await request.put(`/golfer/${createdId}`).send({ golferName: 'Mike' });
    expect(updateRes.status).toBe(200);
  });

  it('deletes a golfer', async () => {
    let createResponse = await request.post('/golfer').send({
      golferName: 'Test golfer',
      golferCountry: 'string',
      worldRanking: '9',
    });

    expect(createResponse.status).toBe(200);
    const createdId = createResponse.body.id;

    let retrieveResponse = await request.delete(`/golfer/${createdId}`);
    console.log(retrieveResponse.body);
    expect(retrieveResponse.status).toBe(200);
  });


});
