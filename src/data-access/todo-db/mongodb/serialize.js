const _serializeSingle = (todo) => {
  return {
    id: todo._id,
    description: todo.description,
  };
};

const serializer = (data) => {
  if (!data) {
    return null;
  }
  if (Array.isArray(data)) {
    return data.map((item) => _serializeSingle(item));
  }
  return _serializeSingle(data);
};

module.exports = serializer;
