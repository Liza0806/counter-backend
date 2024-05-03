const { Schema, model, version } = require('mongoose')
const Joi = require("joi")
const handleMongooseError = require('./HandleMongooseError')

const schema = Joi.array().items(
    Joi.object({
      _id: Joi.string().required(),
      currentValue: Joi.string().required(),
      maxValue: Joi.string().required(),
      minValue: Joi.string().required(),
      error: Joi.object({
        isError: Joi.boolean().required(),
        errorMessage: Joi.string().allow(null).optional()
      }).required()
    })
  );


const counterSchema = new Schema({   
    currentValue: {
        type: String,
        required: false
    },
    maxValue: {
        type: String,
        required: false
    },
    minValue: {
        type: String,
        required: false
    },
    error: {
        type: Object,
        required: false
    }
}, { versionKey: false, timestamps: true });

counterSchema.post("save", handleMongooseError)
const Counter = model("counter", counterSchema)
module.exports = {
    Counter,
    schema,
}