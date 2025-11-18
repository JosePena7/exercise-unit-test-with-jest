const sum = (a, b) => {
    return a + b;
};
console.log(sum(7, 3));

// One euro is:
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

// From Euro to Dollar
const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
};

// From Dollar to Yen
const fromDollarToYen = (dollar) => {
    let euro = dollar / oneEuroIs.USD; 
    return euro * oneEuroIs.JPY;
};

// From Yen to Pound
const fromYenToPound = (yen) => {
    let euro = yen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
};

// ✅ Export everything in ONE PLACE
module.exports = { 
    sum,
    fromEuroToDollar, 
    fromDollarToYen, 
    fromYenToPound 
};
