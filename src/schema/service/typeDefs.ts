import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    services: [Service!]!
    service(id: ID!): Service!
    tasks: [Task!]!
    task(id: ID!): TaskInspect!
  }

  type VersionType {
    Index: Int
  }

  type ContainerSpecType {
    Image: String!
  }

  type ResourcesType {
    Limits: JSON
    Reservations: JSON
  }

  type ServiceRestartPolicyType {
    Condition: String!
    MaxAttempt: Int
  }

  type ServiceTaskTemplateType {
    ContainerSpec: ContainerSpecType
    Resources: ResourcesType
    RestartPolicy: ServiceRestartPolicyType
    Placement: JSON
    ForceUpdate: Int
  }

  type ServiceMode {
    Replicated: ServiceReplicated
  }

  type ServiceReplicated {
    Replicas: Int!
  }

  type ServiceConfigType {
    Parallelism: Int
    Delay: Int
    FailureAction: String!
    Monitor: Int
    MaxFailureRatio: Int
  }

  type ServiceSpecType {
    Name: String!
    TaskTemplate: ServiceTaskTemplateType
    Mode: ServiceMode
    UpdateConfig: ServiceConfigType
    RollbackConfig: ServiceConfigType
    EndpointSpec: ServiceEndpointSpecType
  }

  type ServicePortType {
    Protocol: String
    TargetPort: Int
    PublishedPort: Int
  }

  type VirtualIPType {
    NetworkID: ID!
    Addr: String
  }

  type ServiceEndpointSpecType {
    Mode: String!
    Ports: [ServicePortType]
  }

  type ServiceEndpointType {
    Spec: ServiceEndpointSpecType
    Ports: [ServicePortType]
    VirtualIPs: [VirtualIPType]
  }

  type Service {
    ID: ID!
    Version: VersionType
    CreatedAt: String!
    UpdatedAt: String!
    Spec: ServiceSpecType!
    Endpoint: ServiceEndpointType
    containers: [ContainerList!]!
    secrets: [Secret!]!
    tasks: [Task!]!
  }

  type TaskSpecType {
    ContainerSpec: ContainerSpecType
    Resources: ResourcesType
    RestartPolicy: ServiceRestartPolicyType
    Placement: JSON
  }

  type ContainerStatusType {
    ContainerID: ID
    PID: Int
  }

  type TaskStatusType {
    Timestamp: String!
    State: String!
    Message: String!
    ContainerStatus: ContainerStatusType
  }

  type TaskInspect {
    ID: ID!
    Version: VersionType
    CreatedAt: String
    UpdatedAt: String
    Spec: TaskSpecType
    ServiceID: ID!
    Slot: Int
    NodeID: ID!
    Status: TaskStatusType
    DesiredState: String!
    NetworksAttachments: [JSON]
    AssignedGenericResources: [JSON]
  }

  type Task {
    ID: ID!
    Version: VersionType
    CreatedAt: String
    UpdatedAt: String
    Spec: TaskSpecType
    ServiceID: ID!
    Slot: Int
    NodeID: ID!
    Status: TaskStatusType
    DesiredState: String!
    NetworksAttachments: [JSON]
  }
`;

export default typeDefs;
