const mongoose = require("mongoose");

const CounterModel = require("./models.js").Counter; // Используйте модель Counter из объекта Counter
const getAll = async (req, res) => {
  const result = await CounterModel.find();
  res.json(result);
};
const updateValues = async (req, res) => {
  const { id } = req.params;
  const { currentValue, maxValue, minValue } = req.body;
  try {
    const counter = await CounterModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!counter) {
      return res.status(404).json({ message: "Counter not found" });
    }
    if (currentValue !== undefined) {
      counter.currentValue = currentValue;
    }
    if (maxValue !== undefined) {
      counter.maxValue = maxValue;
    }
    if (minValue !== undefined) {
      counter.minValue = minValue;
    }
    await counter.save();
    res.json(counter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAll,
  updateValues,
};
