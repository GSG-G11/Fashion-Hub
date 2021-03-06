const { getProductById } = require('../database/queries');
const { customError } = require('../errors');

const getOneProduct = (req, res, next) => {
  const { id } = req.params;
  getProductById(id)
    .then((data) => (!data.rowCount
      ? next(customError({ message: 'product not found', status: 404 }))
      : res.status(200).json(data.rows)))
    .catch((error) => next(error));
};

module.exports = getOneProduct;
