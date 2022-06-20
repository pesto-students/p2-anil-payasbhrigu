const mathOperations = require('./Assignment4')

describe("Math tests",() => {
    test('Addition of 4 and 6 should return 10', () => { 
        expect(mathOperations.sum(4,6)).toBe(10);
    });

    test('Subtraction of 4 and 6 should return -2', () => { 
        expect(mathOperations.diff(4,6)).toBe(-2);
    });

    test('Product of 14 and 3 should return 42', () => { 
        expect(mathOperations.product(14,3)).toBe(42);
    });
});