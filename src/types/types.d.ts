export type Maybe<T> = T | null;

export type Json = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  containers: ContainerList[];

  container: ContainerInspect;

  secrets: Secret[];

  secret: Secret;

  services: Service[];

  service: Service;
}

export interface ContainerList {
  Id: string;

  Names: string[];

  Image: string;

  ImageID: string;

  Created?: Maybe<number>;

  Command: string;

  State: string;

  Status: string;

  Ports?: Maybe<PortType[]>;

  Labels?: Maybe<Json>;

  SizeRw?: Maybe<number>;

  SizeRootFs?: Maybe<number>;

  HostConfig?: Maybe<HostConfigType>;

  NetworkSettings?: Maybe<NetworkSettingsType>;

  Mounts?: Maybe<MountType[]>;
}

export interface PortType {
  PrivatePort: number;

  PublicPort?: Maybe<number>;

  Type: string;
}

export interface HostConfigType {
  NetworkMode: string;
}

export interface NetworkSettingsType {
  Networks?: Maybe<Json>;
}

export interface MountType {
  Name: string;

  Source: string;

  Destination: string;

  Driver: string;

  Mode: string;

  RW: boolean;

  Propagation: string;
}

export interface ContainerInspect {
  AppArmorProfile?: Maybe<string>;

  Args?: Maybe<(Maybe<string>)[]>;

  Config?: Maybe<ContainerConfigType>;

  Created: string;

  Driver: string;

  ExecIDs: string[];

  HostConfig?: Maybe<ContainerHostConfigType>;

  HostnamePath: string;

  HostPath: string;

  LogPath: string;

  Id: string;

  Image: string;

  MountLabel?: Maybe<string>;

  Name: string;

  NetworkSettings?: Maybe<Json>;

  Path?: Maybe<string>;

  ProcessLabel?: Maybe<string>;

  ResolvConfPath: string;

  RestartCount?: Maybe<number>;

  State?: Maybe<ContainerStateType>;

  Mounts?: Maybe<(Maybe<MountType>)[]>;
}

export interface ContainerConfigType {
  AttachStderr?: Maybe<boolean>;

  AttachStdin?: Maybe<boolean>;

  AttachStdout?: Maybe<boolean>;

  Cmd?: Maybe<(Maybe<string>)[]>;

  Domainname?: Maybe<string>;

  Env?: Maybe<(Maybe<string>)[]>;

  Hostname: string;

  Image: string;

  Labels?: Maybe<Json>;

  MaxAddress?: Maybe<string>;

  NetworkDisabled?: Maybe<boolean>;

  OpenStdin?: Maybe<boolean>;

  StdinOnce?: Maybe<boolean>;

  Tty?: Maybe<boolean>;

  User?: Maybe<string>;

  Volumes?: Maybe<Json>;

  WorkingDir?: Maybe<string>;

  StopSignal: string;

  StopTimeout?: Maybe<number>;
}

export interface ContainerHostConfigType {
  MaximumIOps?: Maybe<number>;

  MaximumIOBps?: Maybe<number>;

  BlkioWeight?: Maybe<number>;

  BlkioWeightDevice?: Maybe<(Maybe<Json>)[]>;

  BlkioDeviceReadBps?: Maybe<(Maybe<Json>)[]>;

  BlkioDeviceWriteBps?: Maybe<(Maybe<Json>)[]>;

  BlkioDeviceReadIOps?: Maybe<(Maybe<Json>)[]>;

  BlkioDeviceWriteIOps?: Maybe<(Maybe<Json>)[]>;

  ContainerIDFile?: Maybe<string>;

  CpusetCpus?: Maybe<string>;

  CpusetMems?: Maybe<string>;

  CpuPeriod?: Maybe<number>;

  CpuRealtimePeriod?: Maybe<number>;

  CpuRealtimeRuntime?: Maybe<number>;

  Devices?: Maybe<(Maybe<string>)[]>;

  IpcMode?: Maybe<string>;

  Memory?: Maybe<number>;

  MemorySwap?: Maybe<number>;

  MemoryReservation?: Maybe<number>;

  KernelMemory?: Maybe<number>;

  OomKillDisable?: Maybe<boolean>;

  OomScoreAdj?: Maybe<number>;

  NetworkMode: string;

  PidMode?: Maybe<string>;

  PortBindings?: Maybe<Json>;

  Privileged?: Maybe<boolean>;

  ReadonlyRootfs?: Maybe<boolean>;

  PublishAllPorts?: Maybe<boolean>;

  RestartPolicy?: Maybe<RestartPolicyType>;

  LogConfig?: Maybe<Json>;

  Sysctls?: Maybe<Json>;

  Ulimits?: Maybe<(Maybe<Json>)[]>;

  VolumeDriver?: Maybe<string>;

  ShmSize?: Maybe<number>;
}

export interface RestartPolicyType {
  MaximumRetryCount?: Maybe<number>;

  Name?: Maybe<string>;
}

export interface ContainerStateType {
  Error?: Maybe<string>;

  ExitCode?: Maybe<number>;

  FinishedAt?: Maybe<string>;

  OOMKilled?: Maybe<boolean>;

  Dead?: Maybe<boolean>;

  Paused?: Maybe<boolean>;

  Pid?: Maybe<number>;

  Restarting?: Maybe<boolean>;

  Running?: Maybe<boolean>;

  StartedAt?: Maybe<string>;

  Status?: Maybe<string>;
}

export interface Secret {
  ID: string;

  Spec?: Maybe<SecretSpec>;
}

export interface SecretSpec {
  Name: string;
}

export interface Service {
  ID: string;

  CreatedAt: string;

  UpdatedAt: string;

  Spec: ServiceSpec;

  containers: ContainerList[];

  secrets: Secret[];

  tasks: Task[];
}

export interface ServiceSpec {
  Name: string;

  Mode?: Maybe<ServiceMode>;
}

export interface ServiceMode {
  Replicated?: Maybe<ServiceReplicated>;
}

export interface ServiceReplicated {
  Replicas: number;
}

export interface Task {
  ID: string;

  NodeID: string;

  ServiceID: string;

  DesiredState: string;
}

// ====================================================
// Arguments
// ====================================================

export interface ContainerQueryArgs {
  id: string;
}
export interface SecretQueryArgs {
  id: string;
}
export interface ServiceQueryArgs {
  id: string;
}

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

import { MyContext } from "./context";

export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  TContext = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
  | ISubscriptionResolverObject<Result, Parent, TContext, Args>;

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
  parent: Parent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = {}> {
    containers?: ContainersResolver<ContainerList[], TypeParent, TContext>;

    container?: ContainerResolver<ContainerInspect, TypeParent, TContext>;

    secrets?: SecretsResolver<Secret[], TypeParent, TContext>;

    secret?: SecretResolver<Secret, TypeParent, TContext>;

    services?: ServicesResolver<Service[], TypeParent, TContext>;

    service?: ServiceResolver<Service, TypeParent, TContext>;
  }

  export type ContainersResolver<
    R = ContainerList[],
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ContainerResolver<
    R = ContainerInspect,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, ContainerArgs>;
  export interface ContainerArgs {
    id: string;
  }

  export type SecretsResolver<
    R = Secret[],
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SecretResolver<
    R = Secret,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, SecretArgs>;
  export interface SecretArgs {
    id: string;
  }

  export type ServicesResolver<
    R = Service[],
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ServiceResolver<
    R = Service,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, ServiceArgs>;
  export interface ServiceArgs {
    id: string;
  }
}

export namespace ContainerListResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = ContainerList> {
    Id?: IdResolver<string, TypeParent, TContext>;

    Names?: NamesResolver<string[], TypeParent, TContext>;

    Image?: ImageResolver<string, TypeParent, TContext>;

    ImageID?: ImageIdResolver<string, TypeParent, TContext>;

    Created?: CreatedResolver<Maybe<number>, TypeParent, TContext>;

    Command?: CommandResolver<string, TypeParent, TContext>;

    State?: StateResolver<string, TypeParent, TContext>;

    Status?: StatusResolver<string, TypeParent, TContext>;

    Ports?: PortsResolver<Maybe<PortType[]>, TypeParent, TContext>;

    Labels?: LabelsResolver<Maybe<Json>, TypeParent, TContext>;

    SizeRw?: SizeRwResolver<Maybe<number>, TypeParent, TContext>;

    SizeRootFs?: SizeRootFsResolver<Maybe<number>, TypeParent, TContext>;

    HostConfig?: HostConfigResolver<
      Maybe<HostConfigType>,
      TypeParent,
      TContext
    >;

    NetworkSettings?: NetworkSettingsResolver<
      Maybe<NetworkSettingsType>,
      TypeParent,
      TContext
    >;

    Mounts?: MountsResolver<Maybe<MountType[]>, TypeParent, TContext>;
  }

  export type IdResolver<
    R = string,
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NamesResolver<
    R = string[],
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ImageResolver<
    R = string,
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ImageIdResolver<
    R = string,
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CreatedResolver<
    R = Maybe<number>,
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CommandResolver<
    R = string,
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StateResolver<
    R = string,
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StatusResolver<
    R = string,
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PortsResolver<
    R = Maybe<PortType[]>,
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LabelsResolver<
    R = Maybe<Json>,
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SizeRwResolver<
    R = Maybe<number>,
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SizeRootFsResolver<
    R = Maybe<number>,
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type HostConfigResolver<
    R = Maybe<HostConfigType>,
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NetworkSettingsResolver<
    R = Maybe<NetworkSettingsType>,
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MountsResolver<
    R = Maybe<MountType[]>,
    Parent = ContainerList,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace PortTypeResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = PortType> {
    PrivatePort?: PrivatePortResolver<number, TypeParent, TContext>;

    PublicPort?: PublicPortResolver<Maybe<number>, TypeParent, TContext>;

    Type?: TypeResolver<string, TypeParent, TContext>;
  }

  export type PrivatePortResolver<
    R = number,
    Parent = PortType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PublicPortResolver<
    R = Maybe<number>,
    Parent = PortType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TypeResolver<
    R = string,
    Parent = PortType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace HostConfigTypeResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = HostConfigType
  > {
    NetworkMode?: NetworkModeResolver<string, TypeParent, TContext>;
  }

  export type NetworkModeResolver<
    R = string,
    Parent = HostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace NetworkSettingsTypeResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = NetworkSettingsType
  > {
    Networks?: NetworksResolver<Maybe<Json>, TypeParent, TContext>;
  }

  export type NetworksResolver<
    R = Maybe<Json>,
    Parent = NetworkSettingsType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace MountTypeResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = MountType> {
    Name?: NameResolver<string, TypeParent, TContext>;

    Source?: SourceResolver<string, TypeParent, TContext>;

    Destination?: DestinationResolver<string, TypeParent, TContext>;

    Driver?: DriverResolver<string, TypeParent, TContext>;

    Mode?: ModeResolver<string, TypeParent, TContext>;

    RW?: RwResolver<boolean, TypeParent, TContext>;

    Propagation?: PropagationResolver<string, TypeParent, TContext>;
  }

  export type NameResolver<
    R = string,
    Parent = MountType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SourceResolver<
    R = string,
    Parent = MountType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DestinationResolver<
    R = string,
    Parent = MountType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DriverResolver<
    R = string,
    Parent = MountType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ModeResolver<
    R = string,
    Parent = MountType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RwResolver<
    R = boolean,
    Parent = MountType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PropagationResolver<
    R = string,
    Parent = MountType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ContainerInspectResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = ContainerInspect
  > {
    AppArmorProfile?: AppArmorProfileResolver<
      Maybe<string>,
      TypeParent,
      TContext
    >;

    Args?: ArgsResolver<Maybe<(Maybe<string>)[]>, TypeParent, TContext>;

    Config?: ConfigResolver<Maybe<ContainerConfigType>, TypeParent, TContext>;

    Created?: CreatedResolver<string, TypeParent, TContext>;

    Driver?: DriverResolver<string, TypeParent, TContext>;

    ExecIDs?: ExecIDsResolver<string[], TypeParent, TContext>;

    HostConfig?: HostConfigResolver<
      Maybe<ContainerHostConfigType>,
      TypeParent,
      TContext
    >;

    HostnamePath?: HostnamePathResolver<string, TypeParent, TContext>;

    HostPath?: HostPathResolver<string, TypeParent, TContext>;

    LogPath?: LogPathResolver<string, TypeParent, TContext>;

    Id?: IdResolver<string, TypeParent, TContext>;

    Image?: ImageResolver<string, TypeParent, TContext>;

    MountLabel?: MountLabelResolver<Maybe<string>, TypeParent, TContext>;

    Name?: NameResolver<string, TypeParent, TContext>;

    NetworkSettings?: NetworkSettingsResolver<
      Maybe<Json>,
      TypeParent,
      TContext
    >;

    Path?: PathResolver<Maybe<string>, TypeParent, TContext>;

    ProcessLabel?: ProcessLabelResolver<Maybe<string>, TypeParent, TContext>;

    ResolvConfPath?: ResolvConfPathResolver<string, TypeParent, TContext>;

    RestartCount?: RestartCountResolver<Maybe<number>, TypeParent, TContext>;

    State?: StateResolver<Maybe<ContainerStateType>, TypeParent, TContext>;

    Mounts?: MountsResolver<Maybe<(Maybe<MountType>)[]>, TypeParent, TContext>;
  }

  export type AppArmorProfileResolver<
    R = Maybe<string>,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ArgsResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ConfigResolver<
    R = Maybe<ContainerConfigType>,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CreatedResolver<
    R = string,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DriverResolver<
    R = string,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ExecIDsResolver<
    R = string[],
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type HostConfigResolver<
    R = Maybe<ContainerHostConfigType>,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type HostnamePathResolver<
    R = string,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type HostPathResolver<
    R = string,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LogPathResolver<
    R = string,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type IdResolver<
    R = string,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ImageResolver<
    R = string,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MountLabelResolver<
    R = Maybe<string>,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = string,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NetworkSettingsResolver<
    R = Maybe<Json>,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PathResolver<
    R = Maybe<string>,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ProcessLabelResolver<
    R = Maybe<string>,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ResolvConfPathResolver<
    R = string,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RestartCountResolver<
    R = Maybe<number>,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StateResolver<
    R = Maybe<ContainerStateType>,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MountsResolver<
    R = Maybe<(Maybe<MountType>)[]>,
    Parent = ContainerInspect,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ContainerConfigTypeResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = ContainerConfigType
  > {
    AttachStderr?: AttachStderrResolver<Maybe<boolean>, TypeParent, TContext>;

    AttachStdin?: AttachStdinResolver<Maybe<boolean>, TypeParent, TContext>;

    AttachStdout?: AttachStdoutResolver<Maybe<boolean>, TypeParent, TContext>;

    Cmd?: CmdResolver<Maybe<(Maybe<string>)[]>, TypeParent, TContext>;

    Domainname?: DomainnameResolver<Maybe<string>, TypeParent, TContext>;

    Env?: EnvResolver<Maybe<(Maybe<string>)[]>, TypeParent, TContext>;

    Hostname?: HostnameResolver<string, TypeParent, TContext>;

    Image?: ImageResolver<string, TypeParent, TContext>;

    Labels?: LabelsResolver<Maybe<Json>, TypeParent, TContext>;

    MaxAddress?: MaxAddressResolver<Maybe<string>, TypeParent, TContext>;

    NetworkDisabled?: NetworkDisabledResolver<
      Maybe<boolean>,
      TypeParent,
      TContext
    >;

    OpenStdin?: OpenStdinResolver<Maybe<boolean>, TypeParent, TContext>;

    StdinOnce?: StdinOnceResolver<Maybe<boolean>, TypeParent, TContext>;

    Tty?: TtyResolver<Maybe<boolean>, TypeParent, TContext>;

    User?: UserResolver<Maybe<string>, TypeParent, TContext>;

    Volumes?: VolumesResolver<Maybe<Json>, TypeParent, TContext>;

    WorkingDir?: WorkingDirResolver<Maybe<string>, TypeParent, TContext>;

    StopSignal?: StopSignalResolver<string, TypeParent, TContext>;

    StopTimeout?: StopTimeoutResolver<Maybe<number>, TypeParent, TContext>;
  }

  export type AttachStderrResolver<
    R = Maybe<boolean>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type AttachStdinResolver<
    R = Maybe<boolean>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type AttachStdoutResolver<
    R = Maybe<boolean>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CmdResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DomainnameResolver<
    R = Maybe<string>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type EnvResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type HostnameResolver<
    R = string,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ImageResolver<
    R = string,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LabelsResolver<
    R = Maybe<Json>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MaxAddressResolver<
    R = Maybe<string>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NetworkDisabledResolver<
    R = Maybe<boolean>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type OpenStdinResolver<
    R = Maybe<boolean>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StdinOnceResolver<
    R = Maybe<boolean>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TtyResolver<
    R = Maybe<boolean>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type UserResolver<
    R = Maybe<string>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type VolumesResolver<
    R = Maybe<Json>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type WorkingDirResolver<
    R = Maybe<string>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StopSignalResolver<
    R = string,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StopTimeoutResolver<
    R = Maybe<number>,
    Parent = ContainerConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ContainerHostConfigTypeResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = ContainerHostConfigType
  > {
    MaximumIOps?: MaximumIOpsResolver<Maybe<number>, TypeParent, TContext>;

    MaximumIOBps?: MaximumIoBpsResolver<Maybe<number>, TypeParent, TContext>;

    BlkioWeight?: BlkioWeightResolver<Maybe<number>, TypeParent, TContext>;

    BlkioWeightDevice?: BlkioWeightDeviceResolver<
      Maybe<(Maybe<Json>)[]>,
      TypeParent,
      TContext
    >;

    BlkioDeviceReadBps?: BlkioDeviceReadBpsResolver<
      Maybe<(Maybe<Json>)[]>,
      TypeParent,
      TContext
    >;

    BlkioDeviceWriteBps?: BlkioDeviceWriteBpsResolver<
      Maybe<(Maybe<Json>)[]>,
      TypeParent,
      TContext
    >;

    BlkioDeviceReadIOps?: BlkioDeviceReadIOpsResolver<
      Maybe<(Maybe<Json>)[]>,
      TypeParent,
      TContext
    >;

    BlkioDeviceWriteIOps?: BlkioDeviceWriteIOpsResolver<
      Maybe<(Maybe<Json>)[]>,
      TypeParent,
      TContext
    >;

    ContainerIDFile?: ContainerIdFileResolver<
      Maybe<string>,
      TypeParent,
      TContext
    >;

    CpusetCpus?: CpusetCpusResolver<Maybe<string>, TypeParent, TContext>;

    CpusetMems?: CpusetMemsResolver<Maybe<string>, TypeParent, TContext>;

    CpuPeriod?: CpuPeriodResolver<Maybe<number>, TypeParent, TContext>;

    CpuRealtimePeriod?: CpuRealtimePeriodResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    CpuRealtimeRuntime?: CpuRealtimeRuntimeResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    Devices?: DevicesResolver<Maybe<(Maybe<string>)[]>, TypeParent, TContext>;

    IpcMode?: IpcModeResolver<Maybe<string>, TypeParent, TContext>;

    Memory?: MemoryResolver<Maybe<number>, TypeParent, TContext>;

    MemorySwap?: MemorySwapResolver<Maybe<number>, TypeParent, TContext>;

    MemoryReservation?: MemoryReservationResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    KernelMemory?: KernelMemoryResolver<Maybe<number>, TypeParent, TContext>;

    OomKillDisable?: OomKillDisableResolver<
      Maybe<boolean>,
      TypeParent,
      TContext
    >;

    OomScoreAdj?: OomScoreAdjResolver<Maybe<number>, TypeParent, TContext>;

    NetworkMode?: NetworkModeResolver<string, TypeParent, TContext>;

    PidMode?: PidModeResolver<Maybe<string>, TypeParent, TContext>;

    PortBindings?: PortBindingsResolver<Maybe<Json>, TypeParent, TContext>;

    Privileged?: PrivilegedResolver<Maybe<boolean>, TypeParent, TContext>;

    ReadonlyRootfs?: ReadonlyRootfsResolver<
      Maybe<boolean>,
      TypeParent,
      TContext
    >;

    PublishAllPorts?: PublishAllPortsResolver<
      Maybe<boolean>,
      TypeParent,
      TContext
    >;

    RestartPolicy?: RestartPolicyResolver<
      Maybe<RestartPolicyType>,
      TypeParent,
      TContext
    >;

    LogConfig?: LogConfigResolver<Maybe<Json>, TypeParent, TContext>;

    Sysctls?: SysctlsResolver<Maybe<Json>, TypeParent, TContext>;

    Ulimits?: UlimitsResolver<Maybe<(Maybe<Json>)[]>, TypeParent, TContext>;

    VolumeDriver?: VolumeDriverResolver<Maybe<string>, TypeParent, TContext>;

    ShmSize?: ShmSizeResolver<Maybe<number>, TypeParent, TContext>;
  }

  export type MaximumIOpsResolver<
    R = Maybe<number>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MaximumIoBpsResolver<
    R = Maybe<number>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type BlkioWeightResolver<
    R = Maybe<number>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type BlkioWeightDeviceResolver<
    R = Maybe<(Maybe<Json>)[]>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type BlkioDeviceReadBpsResolver<
    R = Maybe<(Maybe<Json>)[]>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type BlkioDeviceWriteBpsResolver<
    R = Maybe<(Maybe<Json>)[]>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type BlkioDeviceReadIOpsResolver<
    R = Maybe<(Maybe<Json>)[]>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type BlkioDeviceWriteIOpsResolver<
    R = Maybe<(Maybe<Json>)[]>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ContainerIdFileResolver<
    R = Maybe<string>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CpusetCpusResolver<
    R = Maybe<string>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CpusetMemsResolver<
    R = Maybe<string>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CpuPeriodResolver<
    R = Maybe<number>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CpuRealtimePeriodResolver<
    R = Maybe<number>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CpuRealtimeRuntimeResolver<
    R = Maybe<number>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DevicesResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type IpcModeResolver<
    R = Maybe<string>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MemoryResolver<
    R = Maybe<number>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MemorySwapResolver<
    R = Maybe<number>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MemoryReservationResolver<
    R = Maybe<number>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type KernelMemoryResolver<
    R = Maybe<number>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type OomKillDisableResolver<
    R = Maybe<boolean>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type OomScoreAdjResolver<
    R = Maybe<number>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NetworkModeResolver<
    R = string,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PidModeResolver<
    R = Maybe<string>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PortBindingsResolver<
    R = Maybe<Json>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PrivilegedResolver<
    R = Maybe<boolean>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ReadonlyRootfsResolver<
    R = Maybe<boolean>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PublishAllPortsResolver<
    R = Maybe<boolean>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RestartPolicyResolver<
    R = Maybe<RestartPolicyType>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LogConfigResolver<
    R = Maybe<Json>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SysctlsResolver<
    R = Maybe<Json>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type UlimitsResolver<
    R = Maybe<(Maybe<Json>)[]>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type VolumeDriverResolver<
    R = Maybe<string>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ShmSizeResolver<
    R = Maybe<number>,
    Parent = ContainerHostConfigType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace RestartPolicyTypeResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = RestartPolicyType
  > {
    MaximumRetryCount?: MaximumRetryCountResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    Name?: NameResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type MaximumRetryCountResolver<
    R = Maybe<number>,
    Parent = RestartPolicyType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = RestartPolicyType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ContainerStateTypeResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = ContainerStateType
  > {
    Error?: ErrorResolver<Maybe<string>, TypeParent, TContext>;

    ExitCode?: ExitCodeResolver<Maybe<number>, TypeParent, TContext>;

    FinishedAt?: FinishedAtResolver<Maybe<string>, TypeParent, TContext>;

    OOMKilled?: OomKilledResolver<Maybe<boolean>, TypeParent, TContext>;

    Dead?: DeadResolver<Maybe<boolean>, TypeParent, TContext>;

    Paused?: PausedResolver<Maybe<boolean>, TypeParent, TContext>;

    Pid?: PidResolver<Maybe<number>, TypeParent, TContext>;

    Restarting?: RestartingResolver<Maybe<boolean>, TypeParent, TContext>;

    Running?: RunningResolver<Maybe<boolean>, TypeParent, TContext>;

    StartedAt?: StartedAtResolver<Maybe<string>, TypeParent, TContext>;

    Status?: StatusResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type ErrorResolver<
    R = Maybe<string>,
    Parent = ContainerStateType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ExitCodeResolver<
    R = Maybe<number>,
    Parent = ContainerStateType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FinishedAtResolver<
    R = Maybe<string>,
    Parent = ContainerStateType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type OomKilledResolver<
    R = Maybe<boolean>,
    Parent = ContainerStateType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DeadResolver<
    R = Maybe<boolean>,
    Parent = ContainerStateType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PausedResolver<
    R = Maybe<boolean>,
    Parent = ContainerStateType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PidResolver<
    R = Maybe<number>,
    Parent = ContainerStateType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RestartingResolver<
    R = Maybe<boolean>,
    Parent = ContainerStateType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RunningResolver<
    R = Maybe<boolean>,
    Parent = ContainerStateType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StartedAtResolver<
    R = Maybe<string>,
    Parent = ContainerStateType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = ContainerStateType,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace SecretResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Secret> {
    ID?: IdResolver<string, TypeParent, TContext>;

    Spec?: SpecResolver<Maybe<SecretSpec>, TypeParent, TContext>;
  }

  export type IdResolver<
    R = string,
    Parent = Secret,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SpecResolver<
    R = Maybe<SecretSpec>,
    Parent = Secret,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace SecretSpecResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = SecretSpec> {
    Name?: NameResolver<string, TypeParent, TContext>;
  }

  export type NameResolver<
    R = string,
    Parent = SecretSpec,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ServiceResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Service> {
    ID?: IdResolver<string, TypeParent, TContext>;

    CreatedAt?: CreatedAtResolver<string, TypeParent, TContext>;

    UpdatedAt?: UpdatedAtResolver<string, TypeParent, TContext>;

    Spec?: SpecResolver<ServiceSpec, TypeParent, TContext>;

    containers?: ContainersResolver<ContainerList[], TypeParent, TContext>;

    secrets?: SecretsResolver<Secret[], TypeParent, TContext>;

    tasks?: TasksResolver<Task[], TypeParent, TContext>;
  }

  export type IdResolver<
    R = string,
    Parent = Service,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<
    R = string,
    Parent = Service,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<
    R = string,
    Parent = Service,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SpecResolver<
    R = ServiceSpec,
    Parent = Service,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ContainersResolver<
    R = ContainerList[],
    Parent = Service,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SecretsResolver<
    R = Secret[],
    Parent = Service,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TasksResolver<
    R = Task[],
    Parent = Service,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ServiceSpecResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = ServiceSpec> {
    Name?: NameResolver<string, TypeParent, TContext>;

    Mode?: ModeResolver<Maybe<ServiceMode>, TypeParent, TContext>;
  }

  export type NameResolver<
    R = string,
    Parent = ServiceSpec,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ModeResolver<
    R = Maybe<ServiceMode>,
    Parent = ServiceSpec,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ServiceModeResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = ServiceMode> {
    Replicated?: ReplicatedResolver<
      Maybe<ServiceReplicated>,
      TypeParent,
      TContext
    >;
  }

  export type ReplicatedResolver<
    R = Maybe<ServiceReplicated>,
    Parent = ServiceMode,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ServiceReplicatedResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = ServiceReplicated
  > {
    Replicas?: ReplicasResolver<number, TypeParent, TContext>;
  }

  export type ReplicasResolver<
    R = number,
    Parent = ServiceReplicated,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace TaskResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Task> {
    ID?: IdResolver<string, TypeParent, TContext>;

    NodeID?: NodeIdResolver<string, TypeParent, TContext>;

    ServiceID?: ServiceIdResolver<string, TypeParent, TContext>;

    DesiredState?: DesiredStateResolver<string, TypeParent, TContext>;
  }

  export type IdResolver<
    R = string,
    Parent = Task,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NodeIdResolver<
    R = string,
    Parent = Task,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ServiceIdResolver<
    R = string,
    Parent = Task,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DesiredStateResolver<
    R = string,
    Parent = Task,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  MyContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  MyContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  MyContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<Json, any> {
  name: "JSON";
}

export type IResolvers<TContext = MyContext> = {
  Query?: QueryResolvers.Resolvers<TContext>;
  ContainerList?: ContainerListResolvers.Resolvers<TContext>;
  PortType?: PortTypeResolvers.Resolvers<TContext>;
  HostConfigType?: HostConfigTypeResolvers.Resolvers<TContext>;
  NetworkSettingsType?: NetworkSettingsTypeResolvers.Resolvers<TContext>;
  MountType?: MountTypeResolvers.Resolvers<TContext>;
  ContainerInspect?: ContainerInspectResolvers.Resolvers<TContext>;
  ContainerConfigType?: ContainerConfigTypeResolvers.Resolvers<TContext>;
  ContainerHostConfigType?: ContainerHostConfigTypeResolvers.Resolvers<
    TContext
  >;
  RestartPolicyType?: RestartPolicyTypeResolvers.Resolvers<TContext>;
  ContainerStateType?: ContainerStateTypeResolvers.Resolvers<TContext>;
  Secret?: SecretResolvers.Resolvers<TContext>;
  SecretSpec?: SecretSpecResolvers.Resolvers<TContext>;
  Service?: ServiceResolvers.Resolvers<TContext>;
  ServiceSpec?: ServiceSpecResolvers.Resolvers<TContext>;
  ServiceMode?: ServiceModeResolvers.Resolvers<TContext>;
  ServiceReplicated?: ServiceReplicatedResolvers.Resolvers<TContext>;
  Task?: TaskResolvers.Resolvers<TContext>;
  Json?: GraphQLScalarType;
} & { [typeName: string]: never };

export type IDirectiveResolvers<Result> = {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
} & { [directiveName: string]: never };
