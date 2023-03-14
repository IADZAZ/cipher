const ShiftCipher = require('../cipher');
const assert = require('assert');

describe('shiftCipher', () => {
    describe('.encrypt', () => {
        it('returns a string', () => {
            // setup
            const expectedResult = 'string';

            // exercise
            const testCipher = new ShiftCipher(2);
            const output = testCipher.encrypt('boogy123');
            const result = typeof output;

            // verify
            assert.strictEqual(result, expectedResult);
            // teardown (optional)
        })
    })
});