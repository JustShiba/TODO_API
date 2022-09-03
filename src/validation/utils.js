const validate = (payload, schema, filter = true) => {
  if (!schema) {
    return {};
  }

  const { value, error } = schema.validate(payload, { stripUnknown: filter });

  if (error) throw error;

  return value;
};

const schemaValidator = (schema, options = {}) => (req, res, next) => {
  const { filter } = options;
  const { query, params, body } = req;

  try {
    req.query = validate(query, schema.query, filter);
    req.body = validate(body, schema.body, filter);
    req.params = validate(params, schema.params, filter);

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { schemaValidator, validate };
