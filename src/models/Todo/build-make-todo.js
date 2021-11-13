const buildMakeTodo = function (todoValidator) {
  return ({ description } = {}) => {
    let { error } = todoValidator({ description });
    if (error) throw new Error(error);

    return {
      getId: () => id,
      getDescription: () => description,
    };
  };
};

module.exports = buildMakeTodo;
