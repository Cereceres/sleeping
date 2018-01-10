module.exports = {
    for(time) {
        const sleep = time + Date.now();
 	    while (Date.now() < sleep) {}
    },
    forAsync(time, cb) {
        const sleep = time + Date.now();
        while (Date.now() < sleep) {}
        if (typeof cb === 'function') return cb(null, time);
        return Promise.resolve(time);
    }
};
