import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    images: [Image!]!
    image(name: String!): ImageInspect!
  }

  type Image {
    Id: ID!
    ParentId: ID
    RepoTags: [String]
    RepoDigests: [String]
    Created: Int!
    Size: Int!
    VirtualSize: Int!
    SharedSize: Int
    Labels: JSON
    Containers: Int
  }

  type GraphDriverType {
    Name: String
    Data: JSON
  }

  type ImageConfigType {
    Image: ID!
    NetworkDisabled: Boolean
    OnBuild: [String]!
    StdinOnce: Boolean
    PublishService: String
    AttachStdin: Boolean
    OpenStdin: Boolean
    Domainname: String
    AttachStdout: Boolean
    Tty: Boolean
    Hostname: String!
    Cmd: [String]
    Env: [String]
    Labels: JSON
    MacAddress: String
    AttachStderr: Boolean
    WorkingDir: String
    User: String
  }

  type RootFSType {
    Type: String
    Layers: [ID!]!
  }

  type ImageInspect {
    Id: ID!
    Container: ID
    Comment: String
    OS: String
    Architecture: String
    Parent: ID
    ContainerConfig: ContainerConfigType
    DockerVersion: String!
    VirtualSize: Int!
    Size: Int!
    Author: String
    Created: String!
    GraphDriver: GraphDriverType
    RepoDigests: [String]
    RepoTags: [String]
    Config: ImageConfigType
    RootFS: RootFSType
  }
`;

// TODO: Check for Architecture and RootFS Type enum

export default typeDefs;
