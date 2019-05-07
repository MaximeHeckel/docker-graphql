import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    secrets: [Secret!]!
    secret(id: ID!): Secret!
  }

  type Secret {
    ID: ID!
    Spec: SecretSpec
  }

  type SecretSpec {
    Name: String!
  }
`;

export default typeDefs;
