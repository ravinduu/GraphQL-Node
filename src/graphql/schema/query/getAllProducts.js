const { gql } = require("apollo-server");

const getAllProducts = gql`
  type Query {
    allProducts: [Product]
  }
`;

module.exports = getAllProducts;
