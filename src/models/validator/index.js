let validator = (schema) => (payload) => {
  let { error } = schema.validate(payload);
  if (error) {
    let message = error.details.map((el) => el.message).join('\n');
    return {
      error: message,
      status: false,
    };
  }
  return {
    error: undefined,
    status: true,
  };
};

module.exports = validator;
