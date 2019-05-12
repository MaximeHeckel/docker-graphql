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

  enum MountTypeEnum {
    volume
    bind
    tmpfs
  }

  enum BindMountPropagationType {
    private
    rprivate
    shared
    rshared
    slave
  }

  type BindOptionsType {
    Propagation: BindMountPropagationType
  }

  type VolumeOptionsType {
    NoCopy: Boolean
    Labels: JSON
    DriverConfig: JSON
  }

  type TmpfsOptionsType {
    Mode: Int
    SizeBytes: Int
  }

  type ServiceMountType {
    Type: MountTypeEnum
    Source: String
    Target: String
    ReadOnly: Boolean
    BindOptions: BindOptionsType
    VolumeOptions: VolumeOptionsType
    TmpfsOptions: TmpfsOptionsType
  }

  type Privileges {
    CredentialSpec: JSON
    SELinuxContext: JSON
  }

  type HealthCheckType {
    Test: [String]
    Interval: Int
    Timeout: Int
    Retries: Int
    StartPeriod: Int
  }

  type DNSConfigType {
    Nameservers: [String]
    Search: [String]
    Options: [String]
  }

  type ContainerSpecSecretType {
    File: JSON
    SecretID: String!
    SecretName: String!
  }

  type ContainerSpecConfigType {
    File: JSON
    ConfigID: String!
    ConfigName: String!
  }

  enum IsolationType {
    default
    process
    hyperv
  }

  type ContainerSpecType {
    Image: String!
    Init: Boolean
    Isolation: IsolationType
    Labels: JSON
    Command: String
    Args: String
    Hostname: String
    Env: [String]
    Dir: String
    User: String
    Groups: [String]
    Mounts: [ServiceMountType!]
    TTY: Boolean
    OpenStdin: Boolean
    ReadOnly: Boolean
    StopSignal: String
    StopGracePeriod: Int
    HealthCheck: HealthCheckType
    Hosts: [String]
    DNSConfig: DNSConfigType
    Secrets: [ContainerSpecSecretType]
    Configs: [ContainerSpecConfigType]
  }

  type ResourcesType {
    Limits: JSON
    Reservations: JSON
  }

  type ServiceRestartPolicyType {
    Delay: Int
    Condition: String!
    MaxAttempt: Int!
    Window: Int!
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

/*
                   Image": "nginx:alpine@sha256:57a226fb6ab6823027c0704a9346a890ffb0cacde06bc19bbc234c8720673555",
                    "Init": false,
                    "Mounts": [
                        {
                            
                        }
                    ],
                    "
*/
