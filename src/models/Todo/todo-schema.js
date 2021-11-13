let Joi = require("joi");

module.exports = Joi.object().keys({
  description: Joi.string().required(),
});
