import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    containers: [ContainerList!]!
    container(id: ID!): ContainerInspect!
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

  type ContainerConfigType {
    AttachStderr: Boolean
    AttachStdin: Boolean
    AttachStdout: Boolean
    Cmd: [String]
    Domainname: String
    Env: [String]
    Hostname: String!
    Image: ID!
    Labels: JSON
    MacAddress: String
    NetworkDisabled: Boolean
    OpenStdin: Boolean
    StdinOnce: Boolean
    Tty: Boolean
    User: String
    Volumes: JSON
    WorkingDir: String
    StopSignal: String!
    StopTimeout: Int
  }

  type ContainerHostConfigType {
    MaximumIOps: Int
    MaximumIOBps: Int
    BlkioWeight: Int
    BlkioWeightDevice: [JSON]
    BlkioDeviceReadBps: [JSON]
    BlkioDeviceWriteBps: [JSON]
    BlkioDeviceReadIOps: [JSON]
    BlkioDeviceWriteIOps: [JSON]
    ContainerIDFile: String
    CpusetCpus: String
    CpusetMems: String
    CpuPeriod: Int
    CpuRealtimePeriod: Int
    CpuRealtimeRuntime: Int
    Devices: [String]
    IpcMode: String
    Memory: Int
    MemorySwap: Int
    MemoryReservation: Int
    KernelMemory: Int
    OomKillDisable: Boolean
    OomScoreAdj: Int
    NetworkMode: String!
    PidMode: String
    PortBindings: JSON
    Privileged: Boolean
    ReadonlyRootfs: Boolean
    PublishAllPorts: Boolean
    RestartPolicy: RestartPolicyType
    LogConfig: JSON
    Sysctls: JSON
    Ulimits: [JSON]
    VolumeDriver: String
    ShmSize: Int
  }

  type RestartPolicyType {
    MaximumRetryCount: Int
    Name: String
  }

  type ContainerStateType {
    Error: String
    ExitCode: Int
    FinishedAt: String
    OOMKilled: Boolean
    Dead: Boolean
    Paused: Boolean
    Pid: Int
    Restarting: Boolean
    Running: Boolean
    StartedAt: String
    Status: String
  }

  type ContainerInspect {
    AppArmorProfile: String
    Args: [String]
    Config: ContainerConfigType
    Created: String!
    Driver: String!
    ExecIDs: [String!]!
    HostConfig: ContainerHostConfigType
    HostnamePath: String!
    HostPath: String!
    LogPath: String!
    Id: String!
    Image: String!
    MountLabel: String
    Name: String!
    NetworkSettings: JSON
    Path: String
    ProcessLabel: String
    ResolvConfPath: String!
    RestartCount: Int
    State: ContainerStateType
    Mounts: [MountType]
    service: Service
  }
`;

export default typeDefs;
