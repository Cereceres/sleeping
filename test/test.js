'use strict'
const wait = require('../index')
const assert = require('assert')
describe('test to wait module', function () {
    this.timeout(5000);
    it('shoul block the flow', function () {
        let time1 = Date.now()
        wait.for(3000)
        let time2 = Date.now()
        assert((time2-time1) >= 3000)
    })
    
    it('shoul block the flow', function (done) {
        let time1 = Date.now()
        wait.forAsync(3000)
        .then(function () {
          let time2 = Date.now()
          assert((time2-time1) >= 3000)
          done()
        })
        
    })
})
