const asyncFatchData = require("./asyncFatchData");
test('asyncFatchData', async () => { 
    //const data = await asyncFatchData();
    //expect(data).toBe("MD FIROJ AHMED");
    let data;
    try {
        data= await asyncFatchData();
        expect(data).toBe("MD FIROJ AHMED");

    } catch (error) {
        throw error;
    }
 })