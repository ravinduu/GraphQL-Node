const { gql } = require("apollo-server");

const getAllProducts = gql`
  type Query {
    getProducts: [Product]
  }
`;

module.exports = getAllProducts;
