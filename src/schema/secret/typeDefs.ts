import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    secrets: [Secret!]!
    secret(id: ID!): Secret!
  }

  type SecretDriverType {
    Name: String!
    Options: JSON
  }

  type SecretSpec {
    Name: String!
    Labels: JSON
    Driver: SecretDriverType
  }

  type Secret {
    ID: ID!
    Version: VersionType
    CreatedAt: String!
    UpdatedAt: String!
    Spec: SecretSpec
  }
`;

export default typeDefs;
