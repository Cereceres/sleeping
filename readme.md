## Install
This method block the nodejs event loop
```bash
$ npm install waiting
```
## API Documentation waiting -> Object
### waiting.for(delay) -> undefined
the param is the time that is event loop will be blocked

### waiting.for(delay) -> Promise
the param is the time that is event loop will be blocked, return a promise that is 
resolved when the block is resolved.