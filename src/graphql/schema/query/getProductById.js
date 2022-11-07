const { gql } = require("apollo-server");

const getProductById = gql`
  type Query {
    productById(id: ID!): Product
  }
`;

module.exports = getProductById;
