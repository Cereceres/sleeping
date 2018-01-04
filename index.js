module.exports = {
    for(time) {
        const sleep = time + Date.now();
 	    while (Date.now() < sleep) {}
    },
    forAsync(time) {
        const sleep = time + Date.now();
        while (Date.now() < sleep) {}
        return Promise.resolve();
    }
};
