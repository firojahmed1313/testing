const Sum = require("./Sum");

test('adds 1 + 2 to equal 3 ', () => { 
    expect(Sum(1,2)).toBe(3);
 });
test('adds 5 + 2 to equal 7 ', () => { 
    expect(Sum(5,2)).toBe(7);
 });
test('adds 1 + 9 to equal 10 ', () => { 
    expect(Sum(1,9)).toBe(10);
 });
test('adds 11 + 12 to equal 23 ', () => { 
    expect(Sum(11,12)).not.toBe(24);
 });