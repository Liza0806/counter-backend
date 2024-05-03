const express = require('express');
const router = express.Router();
const { schemas } = require('./models');
const Counter = require("./models");

// Импортируем функцию getAll из файла ./index
const getAll = require("./index").getAll;

router.get('/', async (req, res) => {
    try {
        const result = await getAll(req, res); // Вызываем функцию getAll() с объектами req и res
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
