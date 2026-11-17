const { test } = require("node:test");
const assert = require("node:assert/strict");
const { add } = require("../src/calculator");

test("adds two positive numbers", () => {
    assert.equal(add(5, 3), 8);
});

test("adds negative numbers", () => {
    assert.equal(add(-5, -3), -8);
});

test("handles zero", () => {
    assert.equal(add(10, 0), 10);
});

test("rejects invalid inputs", () => {
    assert.throws(() => add("5", 3), TypeError);
});
