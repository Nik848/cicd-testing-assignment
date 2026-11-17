function add(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new TypeError("Both inputs must be valid numbers");
    }

    return a + b;
}

module.exports = { add };
