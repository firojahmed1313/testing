const no= require('./no');

test('should first', () => { 
    expect(no()).toBeGreaterThan(2);
 })
test('should first', () => { 
    expect(no()).toBeGreaterThanOrEqual(3);
 })
test('should first', () => { 
    expect(no()).toBeLessThan(4);
 })
test('should first', () => { 
    expect(no()).toBeLessThanOrEqual(4);
 })
test('should first', () => { 
    expect(no()).toBe(3);
 })
test('should first', () => { 
    expect(no()).toEqual(3);
 })
test('should first', () => { 
    expect(no()).toBeCloseTo(3.005);
 })