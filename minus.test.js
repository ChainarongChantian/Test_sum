const minus = require('./minus');

test('1 - 2 เท่ากับ -1', ()=> {
    expect(minus(1,2)).toBe(-1);
});

test('10 - 2 เท่ากับ ?', ()=> {
    expect(minus(10,2)).toBe(8);
});

test('5 - 0 เท่ากับ 5', ()=> {
    expect(minus(5,0)).toBe(5);
});

test('0 - 5 เท่ากับ -5', ()=> {
    expect(minus(0,5)).toBe(-5);
});

test('10 - 5 เท่ากับ -15', ()=> {
    expect(minus(10,5)).toBe(5);
});

test('9 - 9 เท่ากับ 0', ()=> {
    expect(minus(9,9)).toBe(0);
});