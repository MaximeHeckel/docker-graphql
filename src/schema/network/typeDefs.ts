import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    networks: [Network!]!
    network(id: ID!): NetworkInspect!
  }

  enum NetworkScopeEnum {
    swarm
    global
    local
  }

  type IPAMConfigType {
    Subnet: String!
    Gateway: String!
  }

  type IPAMType {
    Driver: String!
    Config: [IPAMConfigType]
    Options: JSON
  }

  type Network {
    Name: String
    Id: ID!
    Created: String!
    Scope: NetworkScopeEnum!
    Driver: String!
    EnableIPv6: Boolean
    Internal: Boolean
    Attachable: Boolean
    Ingress: Boolean
    IPAM: IPAMType
    Options: JSON
  }

  type NetworkInspect {
    Name: String
    Id: ID!
    Created: String!
    Scope: NetworkScopeEnum!
    Driver: String!
    EnableIPv6: Boolean
    Internal: Boolean
    Attachable: Boolean
    Ingress: Boolean
    IPAM: IPAMType
    Options: JSON
    Labels: JSON
    Containers: JSON
  }
`;

export default typeDefs;
