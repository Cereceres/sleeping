'use strict';
const wait = require('../index');
const assert = require('assert');
describe('test to wait module', function() {
    this.timeout(15000);
    it('should block the flow', () => {
        const time1 = Date.now();
        wait.for(10000);
        const time2 = Date.now();
        assert(time2 - time1 >= 10000);
    });

    it('should block the flow in async mode', (done) => {
        const time1 = Date.now();
        wait.forAsync(6000)
            .then(() => {
                const time2 = Date.now();
                assert(time2 - time1 >= 6000);
                done();
            });
    });
    it('should block the flow in async mode using callback', (done) => {
        const time1 = Date.now();
        wait.forAsync(6000, () => {
            const time2 = Date.now();
            assert(time2 - time1 >= 6000);
            done();
        });
    });

    it('shoul block the flow with async functions', async() => {
        const time1 = Date.now();
        await wait.forAsync(6000);
        const time2 = Date.now();
        assert(time2 - time1 >= 6000);
    });
});
