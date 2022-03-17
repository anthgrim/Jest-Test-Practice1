const operations = require('./operations');

describe('Operations', () => {
    //Deconstruct operations
    const { add, subtract, multiply, divide } = operations;

    //Test 1 - Add two numbers
    it('1 + 1 = 2', () => {
        expect(add(1,1)).toBe(2);
    });

    //Test 2 - Subtract two numbers
    it('1 - 1 = 0', () => {
        expect(subtract(1,1)).toBe(0);
    });

    //Test 3 - Multiply 2 numbers
    it('2 * 2 = 4', () => {
        expect(multiply(2,2)).toBe(4);
    });

    //Test 4 - Divide two numbers
    it('4 / 2 = 2', () => {
        expect(divide(4,2)).toBe(2);
    });
})