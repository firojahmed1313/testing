const obj = require('./obj');
test('should first', () => { 
    expect(obj()).not.toBeNull();
 })
test('should first', () => { 
    expect(obj()).toBeDefined();
 })
test('should first', () => { 
    expect(obj()).toBeTruthy();
 })
test('should first', () => { 
    expect(obj()).not.toBeFalsy();
 })
