const { mergeTypeDefs } = require("@graphql-tools/merge");

const product = require("./product");

const types = mergeTypeDefs([product]);

module.exports = types;
