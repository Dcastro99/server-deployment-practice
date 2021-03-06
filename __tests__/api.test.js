const supertest = require('supertest');
const { person } = require('../src/handler/person');
// const { musician } = require('../src/routes/musician');
const { app } = require('../src/server');

describe('API routes', () => {
  describe('person', () => {
    it('fills in a person', () => {
      const req = { method: 'GET', url: '/person?name=danny', query: { name: 'danny' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      };

      person(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ name: 'danny' });
    });
    it('uses the validator for person', async () => {
      const request = supertest(app);
      const result = await request.get('/person/');

      expect(result.status).toBe(404);
    });
  });

});
