const CounterModel = require('./models.js').Counter; // Используйте модель Counter из объекта Counter

const getAll = async (req, res) => {

        const result = await CounterModel.find(); // Используйте метод find() на модели CounterModel
        res.json(result);
  
};

module.exports = {
    getAll,
};
