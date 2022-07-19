

const { db } = require('../src/db');
const { createMusician, getMusician } = require('../src/routes/musician');



describe('Musician route', () => {
  beforeEach(async () => {
    await db.sync();
  });

  it('can ctreate a musician', async () => {
    const req = {
      body: { musicianType: 'musician test', instrument: 'string' },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    const created = await createMusician(req, res);

    const musician = res.send.mock.calls[0][0];
    expect(musician).toMatchObject({
      musicianType: 'musician test',
      instrument: 'string',
    });
  });

  it('can query a musician', async () => {
    const createReq = {
      body: { musicianType: 'test musician', instrument: 'guitar' },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await createMusician(createReq, res);

    const createdMusicianId = res.send.mock.calls[0][0].id;

    const getReq = { params: { id: createdMusicianId } };

    await getMusician(getReq, res);

    expect(res.send.mock.calls[1][0]).toMatchObject({
      id: createdMusicianId,
      musicianType: 'test musician',
      instrument: 'guitar',
    });
  });


});
