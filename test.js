const { sum } = require('./app.js');

test('adds 14 + 9 should equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test('1 Euro should equal 1.07 USD', () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

test('1 USD should equal approximately 146.261682 JPY', () => {
    // 1 USD -> 1 / 1.07 EUR -> * 156.5 JPY ≈ 146.261682
    expect(fromDollarToYen(1)).toBeCloseTo(146.26168224299065);
});

test('1000 JPY should equal approximately 5.559872 GBP', () => {
    // 1000 JPY -> 1000 / 156.5 EUR -> * 0.87 GBP ≈ 5.559872
    expect(fromYenToPound(1000)).toBeCloseTo(5.559872);
});
