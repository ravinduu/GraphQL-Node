const { ApolloServer } = require("apollo-server-express");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const express = require("express");

const { types, queries, mutations, resolvers } = require("./graphql/index");
const { PATH } = require("./app-constants");

const app = express();
const typeDefs = mergeTypeDefs([types, queries, mutations]);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    path: PATH,
  });
}

startServer().catch((error) => console.error(`Error: ${error}`));

module.exports = app;
