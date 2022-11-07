const products = require("./productData");

const getProductById = async ({ id }) => {
  return Promise.resolve(products.find((p) => p.id === id)).catch((error) =>
    console.log(error)
  );
};

module.exports = { getProductById };
