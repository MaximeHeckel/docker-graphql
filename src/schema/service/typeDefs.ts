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
    secrets: [Secret!]!
    tasks: [Task!]!
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
  type Task {
    ID: ID!
    NodeID: ID!
    ServiceID: ID!
    DesiredState: String!
  }
`;

export default typeDefs;
