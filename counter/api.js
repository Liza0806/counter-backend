const express = require("express");
const router = express.Router();
const { schemas } = require("./models");
const Counter = require("./models");

const getAll = require("./index").getAll;
const updateValues = require("./index").updateValues;

router.get("/", async (req, res) => {
  try {
    const result = await getAll(req, res);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
router.put("/:id", updateValues);

module.exports = router;
