const repeatingSetup = require("./repeatingSetup");
const afterEa=require("./afterEach");
const beforeEa = require("./beforeEach");

beforeEach(()=>{
    console.log(beforeEa());
    //return beforeEa();
})

afterEach(()=>{
    console.log(afterEa());
    //return afterEa();
})
test('repeatingSetup', () => { 
    expect(repeatingSetup()).toBe("repeatingSetup");
 })

describe('first', () => { 
    beforeEach(()=>{
        console.log("in desc beforeEach ");
        //return beforeEa();
    })
    afterEach(()=>{
        console.log("in desc afterEach");
        //return afterEa();
    })
    test('repeatingSetup', () => { 
        expect(repeatingSetup()).not.toBeNull();
     })
 })