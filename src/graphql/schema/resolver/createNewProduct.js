const uuid = require("uuid");

const products = require("./productData");
const getProductById = require("./getProductById");

const productNameExist = async (name) => {
  return products.find((p) => p.productName === name) === undefined
    ? false
    : true;
};

const createNewProduct = async (product) => {
  product.id = uuid.v1();

  await productNameExist(product.productName)
    .then((isExist) => {
      if (!isExist) {
        products.push(product);
      }
    })
    .catch((error) => console.log(error));
  return getProductById.getProductById({ id: product.id });
};

module.exports = { createNewProduct };
