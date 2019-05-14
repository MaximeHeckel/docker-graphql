import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    configs: [Config!]!
    config(id: ID): Config!
  }

  type ConfigSpec {
    Name: String!
  }

  type Config {
    ID: ID!
    Version: VersionType
    CreatedAt: String!
    UpdatedAt: String!
    Spec: ConfigSpec
  }
`;

export default typeDefs;
