const { validator } = require('../src/middleware/validator');

describe('validator', () => {

    // it('logs a request', () => {
    //     jest.spyOn(console, 'log').mockImplementation();

    //     // Phase 1: set up
    //     const valReq = { method: 'GET', url: '/person?name=danny', query: { color: 'yellow' } };
    //     const res = {};
    //     const next = () => { };

    //     //Action
    //     validator(valReq, res, next);

    //     // Phase 3: assertions
    //     expect(console.log).toHaveBeenCalledWith('GET', '/person?name=danny', { name: 'danny' });
    // });

    // Test that validator calls `next()` to pass control to the next middleware
    it('calls next()', () => {
        const req = { method: 'GET', url: '/person?name=danny', query: { name: 'danny' } };
        const res = {};
        const next = jest.fn();

        //Action
        validator(req, res, next);

        // Assertion
        expect(next).toHaveBeenCalled();
    });
});
