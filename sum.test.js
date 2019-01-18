const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21', ()=> {
  expect(sum(20,1)).toBe(21);
});

// 2 + 5 เท่ากับ ?
test('2 + 5 เท่ากับ ?', ()=> {
  expect(sum(2,5)).toBe(7);
});


test('1 + 1 เท่ากับ 2', ()=> {
  expect(sum(1,1)).toBe(2);
});
test('6 + 5 เท่ากับ 11', ()=> {
  expect(sum(6,5)).toBe(11);
});
test('0 + 0 เท่ากับ ?', ()=> {
  expect(sum(0,0)).toBe(0);
});