const { test } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../app");

test("GET /health returns healthy status", async () => {
    const response = await request(app).get("/health");

    assert.equal(response.status, 200);
    assert.deepEqual(response.body, { status: "healthy" });
});

test("GET /api/add returns the sum", async () => {
    const response = await request(app).get("/api/add?a=10&b=20");

    assert.equal(response.status, 200);
    assert.deepEqual(response.body, { result: 30 });
});

test("GET /api/add rejects invalid input", async () => {
    const response = await request(app).get("/api/add?a=abc&b=20");

    assert.equal(response.status, 400);
    assert.deepEqual(response.body, {
        error: "Inputs must be valid numbers"
    });
});

test("GET /api/add rejects missing parameters", async () => {
    const response = await request(app).get("/api/add?a=10");

    assert.equal(response.status, 400);
});
