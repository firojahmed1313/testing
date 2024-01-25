const promisefatchdata = require('./promisefatchdata');

test('promisefatchdata', () => { 
    return promisefatchdata().then(data =>{
        expect(data).toBe("MD FIROJ AHMED");
    })
 })