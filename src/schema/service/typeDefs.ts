import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    services: [Service!]!
    service(id: ID!): Service!
  }
  type Service {
    ID: ID!
    CreatedAt: String!
    UpdatedAt: String!
    Spec: ServiceSpec!
    containers: [Container!]!
  }
  type ServiceSpec {
    Name: String!
    Mode: ServiceMode
  }
  type ServiceMode {
    Replicated: ServiceReplicated
  }
  type ServiceReplicated {
    Replicas: Int!
  }
`;

export default typeDefs;

// tasks: [Task!]!
// secrets: [Secret!]!
// containers: [Container!]!
