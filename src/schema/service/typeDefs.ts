import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    services: [Service!]!
    service(id: ID!): Service!
  }

  type ServiceReplicated {
    Replicas: Int!
  }

  type ServiceMode {
    Replicated: ServiceReplicated
  }

  scalar JSON

  type ServiceSpec {
    Labels: JSON
    Name: String!
    Mode: ServiceMode
  }

  type Service {
    ID: ID!
    CreatedAt: String!
    UpdatedAt: String!
    Spec: ServiceSpec!
  }
`;

export default typeDefs;

// tasks: [Task!]!
// secrets: [Secret!]!
// containers: [Container!]!
