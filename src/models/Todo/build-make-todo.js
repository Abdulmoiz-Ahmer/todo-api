const buildMakeTodo = function (todoValidator) {
  return ({ description } = {}) => {
    let { error } = todoValidator({ description });

    if (error) {
      throw new Error(error);
    }

    return {
      getDescription: () => description,
    };
  };
};

module.exports = buildMakeTodo;
