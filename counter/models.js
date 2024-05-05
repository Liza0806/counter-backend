const { Schema, model, version } = require('mongoose')
const Joi = require("joi")
const handleMongooseError = require('./HandleMongooseError')

const schema = Joi.array().items(
    Joi.object({
      _id: Joi.string().required(),
      currentValue: Joi.number().required(),
      maxValue: Joi.number().required(),
      minValue: Joi.number().required(),
      error: Joi.boolean().required()})
  );


const counterSchema = new Schema({   

    currentValue: {
        type: Number,
        required: false
    },
    maxValue: {
        type: Number,
        required: false
    },
    minValue: {
        type: Number,
        required: false
    },
    error: {
        type: Boolean,
        required: false
    }
}, { versionKey: false, timestamps: true });

counterSchema.post("save", handleMongooseError)
const Counter = model("counter", counterSchema)
module.exports = {
    Counter,
    schema,
}
