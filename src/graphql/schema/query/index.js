const { mergeTypeDefs } = require("@graphql-tools/merge");

const getAllProducts = require("./getAllProducts");
const getProductById = require("./getProductById");

const queries = mergeTypeDefs([getAllProducts, getProductById]);

module.exports = queries;
