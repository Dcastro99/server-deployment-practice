const { db } = require('../src/db');

// clears our database

describe('models', () => {
  beforeEach(async () => {
    await db.sync();
  });

  it('has a Musician and Golfer model', () => { });
});
