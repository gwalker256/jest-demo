// const { expect } = require("@jest/globals");
// const { test } = require("picomatch")
const { add } = require("../app")

test('should equal 5 when passed 2 and 3', () => {

expect(add(2,3)).toBe(5);
});