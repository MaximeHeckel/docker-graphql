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
  Name: string;
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
    Name?: NameResolver<string, TypeParent, TContext>;
  }

  export type NameResolver<
    R = string,
    Parent = ContainerInspect,
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
