
const { db } = require('../src/db');
const { createGolfer, getGolfer } = require('../src/routes/golfer');



describe('Golfer route', () => {
  beforeEach(async () => {
    await db.sync();
  });

  // it('can ctreate a golfer', async () => {
  //   const req = {
  //     body: { golferName: 'golfer test', golferCountry: 'string', worldRanking: 0 },
  //   };
  //   const res = {
  //     status: jest.fn().mockReturnThis(),
  //     send: jest.fn(),
  //   };

  //   const created = await createGolfer(req, res);

  //   const golfer = res.send.mock.calls[0][0];
  //   expect(golfer).toMatchObject({
  //     golferName: 'golfer test',
  //     golferCountry: 'string',
  //     worldRanking: 0,
  //   });
  // });

  it('can query a golfer', async () => {
    const createReq = {
      body: { golferName: 'test golfer', golferCountry: 'string', worldRanking: 0 },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await createGolfer(createReq, res);

    const createdGolferId = res.send.mock.calls[0][0].id;

    const getReq = { params: { id: createdGolferId } };

    await getGolfer(getReq, res);

    expect(res.send.mock.calls[1][0]).toMatchObject({
      id: createdGolferId,
      golferName: 'test golfer',
      golferCountry: 'string',
      worldRanking: 0,
    });
  });

});
