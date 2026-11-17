const express = require("express");
const { add } = require("./src/calculator");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({ status: "healthy" });
});

app.get("/api/add", (req, res) => {
    const { a, b } = req.query;

    if (a === undefined || b === undefined || a.trim() === "" || b.trim() === "") {
        return res.status(400).json({ error: "Both a and b are required" });
    }

    const numA = Number(a);
    const numB = Number(b);

    if (!Number.isFinite(numA) || !Number.isFinite(numB)) {
        return res.status(400).json({ error: "Inputs must be valid numbers" });
    }

    res.json({ result: add(numA, numB) });
});

module.exports = app;
