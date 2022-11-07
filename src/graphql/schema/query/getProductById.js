const { gql } = require("apollo-server");

const getProductById = gql`
  type Query {
    getProduct(id: ID!): Product
  }
`;

module.exports = getProductById;
