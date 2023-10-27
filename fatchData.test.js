const fatchData = require("./fatchData");

test('fatchData', done => { 
    function name(data) {
        try {
            expect(data).toBe("MD FIROJ AHMED");
            done();
        } catch (error) {
            done(error);
        }
    }
    fatchData(name);
 })