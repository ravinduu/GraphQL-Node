const { gql } = require("apollo-server");

const product = gql`
  type Product {
    id: ID!
    productName: String!
    unitPrice: Float!
  }
`;

module.exports = product;
