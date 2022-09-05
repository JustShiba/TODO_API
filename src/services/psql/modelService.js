class ModelService {
  constructor(model) {
    this.model = model;
  }

  get = (options = {}) => this.model.findAll(options);

  getOne = (options = {}) => this.model.findOne(options);

  getOneByField = (field, value, options = {}) =>
    this.getOne({
      where: { [field]: value },
      ...options,
    });

  getAllByField = (field, value, options = {}) =>
    this.get({
      where: { [field]: value },
      ...options,
    });

  add = (options = {}) => this.model.create(options);

  count = (options) => this.model.count(options);

  bulkAdd = (data) => this.model.bulkCreate(data);

  remove = (options) => this.model.destroy({ where: { ...options } });

  update = (field, value, options) =>
    this.model.update(
      {
        [field]: value,
      },
      { where: { ...options } },
    );
}

module.exports = ModelService;
