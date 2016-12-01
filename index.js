'use strict'
module.exports = {
    for: function (time) {
        time += Date.now();
 	    while (Date.now() < time) { }
    },
    forAsync: function (time) {
        return new Promise(function (resolve) {
            time += Date.now()
             while (Date.now() < time) { }
            resolve()    
        })
    }
}