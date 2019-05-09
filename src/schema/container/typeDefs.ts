import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    containers: [ContainerList!]!
    container(id: ID!): ContainerInspect!
  }
  type ContainerInspect {
    Name: String!
  }
  type ContainerList {
    Id: String!
    Names: [String!]!
    Image: String!
    ImageID: String!
    Created: Int
    Command: String!
    State: String!
    Status: String!
    Ports: [PortType!]
    Labels: JSON
    SizeRw: Int
    SizeRootFs: Int
    HostConfig: HostConfigType
    NetworkSettings: NetworkSettingsType
    Mounts: [MountType!]
  }
  type PortType {
    PrivatePort: Int!
    PublicPort: Int
    Type: String!
  }
  type HostConfigType {
    NetworkMode: String!
  }
  type NetworkSettingsType {
    Networks: JSON
  }
  type MountType {
    Name: String!
    Source: String!
    Destination: String!
    Driver: String!
    Mode: String!
    RW: Boolean!
    Propagation: String!
  }
`;

export default typeDefs;
