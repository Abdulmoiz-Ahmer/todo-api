let Joi = require("joi");

module.exports = Joi.object().keys({
  description: Joi.string()
    .required()
    .error(() => "must have name as string"),
});
