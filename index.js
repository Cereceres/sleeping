'use strict';
module.exports = {
    for(time) {
        const sleep = time + Date.now();
 	    while (Date.now() < sleep) {}
    },
    forAsync(time) {
        return new Promise((resolve) => {
            const sleep = time + Date.now();
            while (Date.now() < sleep) {}
            resolve();
        });
    }
};
