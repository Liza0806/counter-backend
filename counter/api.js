const express = require("express");
const router = express.Router();

const getAll = require("./index").getAll;
const updateValues = require("./index").updateValues;

router.get("/", getAll);
router.put("/:id", updateValues);

module.exports = router;
