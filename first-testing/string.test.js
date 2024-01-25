const string = require('./string');

test('should first', () => { 
    expect(string()).toMatch(/iroj/);
 })
test('should first', () => { 
    expect(string()).not.toMatch(/ioj/);
 })