'use strict';
const wait = require('../index');
const assert = require('assert');
describe('test to wait module', function() {
    this.timeout(15000);
    it('shoul block the flow', () => {
        const time1 = Date.now();
        wait.for(10000);
        const time2 = Date.now();
        assert(time2 - time1 >= 10000);
    });

    it('shoul block the flow', (done) => {
        const time1 = Date.now();
        wait.forAsync(6000)
            .then(() => {
                const time2 = Date.now();
                assert(time2 - time1 >= 6000);
                done();
            });
    });
});
