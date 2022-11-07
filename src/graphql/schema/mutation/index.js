const { mergeTypeDefs } = require("@graphql-tools/merge");

const createProduct = require("./createProduct");

const mutations = mergeTypeDefs([createProduct]);

module.exports = mutations;
