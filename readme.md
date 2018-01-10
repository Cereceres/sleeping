[![Build Status](https://travis-ci.org/Cereceres/sleeping.svg?branch=master)](https://travis-ci.org/Cereceres/sleeping)

# Usage
```js
const waiting = require('waiting')
// sync mode
const time1 = Date.now();
wait.for(10000);
const time2 = Date.now();
assert(time2 - time1 >= 10000);
// async mode
const time1 = Date.now();
wait.forAsync(6000)
    .then(() => {
        const time2 = Date.now();
        assert(time2 - time1 >= 6000);
    });
// with callback
const time1 = Date.now();
wait.forAsync(6000, () => {
    const time2 = Date.now();
    assert(time2 - time1 >= 6000);
    done();
});

// with async functions

async() =>{
    const time1 = Date.now();
    await wait.forAsync(6000)
    const time2 = Date.now();
    assert(time2 - time1 >= 6000);
}
```
## Install
This method block the nodejs event loop
```bash
$ npm install waiting
```
## API Documentation waiting -> Object
### waiting.for(delay) -> undefined
the param is the time that is event loop will be blocked

### waiting.forAsync(delay) -> Promise
the param is the time that is event loop will be blocked, return a promise that is 
resolved when the block is resolved.
