const { gql } = require("apollo-server");

const createProduct = gql`
  type Mutation {
    addProduct(productName: String!, unitPrice: Float!): Product
  }
`;

module.exports = createProduct;
