const products = require("./productData");
const getProductById = require("./getProductById");
const createNewProduct = require("./createNewProduct");

const resolvers = {
  Query: {
    getProducts: () => products,
    getProduct: async (_, { id }) => getProductById.getProductById({ id: id }),
  },
  Mutation: {
    addProduct: async (_, { productName, unitPrice }) =>
      createNewProduct.createNewProduct({
        productName: productName,
        unitPrice: unitPrice,
      }),
  },
};

module.exports = resolvers;
