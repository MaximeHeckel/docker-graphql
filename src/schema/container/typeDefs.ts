import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    containers: [Container!]!
    container(id: ID!): Container!
  }
  type Container {
    Id: String!
    Command: String!
    Image: String!
    Names: [String!]!
    State: String!
    Status: String!
  }
`;

export default typeDefs;
