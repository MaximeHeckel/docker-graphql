import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    nodes: [Node!]!
    node(id: ID): Node!
  }

  enum AvailabilityEnum {
    active
    pause
    drain
  }

  enum RoleEnum {
    manager
    worker
  }

  type NodeSpec {
    Availability: AvailabilityEnum
    Name: String
    Role: RoleEnum
    Labels: JSON
  }

  enum OSEnum {
    linux
    windows
  }

  type Platform {
    Architecture: String
    OS: OSEnum
  }

  type NodeResources {
    NanoCPUs: Int
    MemoryBytes: Int
  }

  type Plugin {
    Type: String
    Name: String
  }

  type Engine {
    EngineVersion: String!
    Labels: JSON
    Plugins: [Plugin!]!
  }

  type TLSInfo {
    TrustRoot: String!
    CertIssuerSubject: String!
    CertIssuerPublicKey: String!
  }

  type NodeDescription {
    Hostname: String!
    Platform: Platform
    Resources: NodeResources
    GenericResources: [JSON]!
    Engine: Engine
    TLSInfo: TLSInfo
  }

  enum StateEnum {
    unknown
    down
    ready
    disconnected
  }

  type NodeStatus {
    State: StateEnum
    Message: String
    Addr: String
  }

  enum ReachabilityEnum {
    unknown
    unreachable
    reachable
  }

  type NodeManagerStatus {
    Leader: Boolean
    Reachability: ReachabilityEnum
    Addr: String
  }

  type Node {
    ID: ID!
    Version: VersionType
    CreatedAt: String!
    UpdatedAt: String!
    Spec: NodeSpec
    Description: NodeDescription
    Status: NodeStatus
    Manager: NodeManagerStatus
  }
`;

export default typeDefs;
