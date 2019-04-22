export type Maybe<T> = T | null;

// ====================================================
// Types
// ====================================================

export interface Query {
  services: Service[];

  service: Service;
}

export interface Service {
  ID: string;

  CreatedAt: string;

  UpdatedAt: string;

  Spec: ServiceSpec;
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

// ====================================================
// Arguments
// ====================================================

export interface ServiceQueryArgs {
  id: string;
}

import { GraphQLResolveInfo } from "graphql";

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
    services?: ServicesResolver<Service[], TypeParent, TContext>;

    service?: ServiceResolver<Service, TypeParent, TContext>;
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

export namespace ServiceResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Service> {
    ID?: IdResolver<string, TypeParent, TContext>;

    CreatedAt?: CreatedAtResolver<string, TypeParent, TContext>;

    UpdatedAt?: UpdatedAtResolver<string, TypeParent, TContext>;

    Spec?: SpecResolver<ServiceSpec, TypeParent, TContext>;
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

export type IResolvers<TContext = MyContext> = {
  Query?: QueryResolvers.Resolvers<TContext>;
  Service?: ServiceResolvers.Resolvers<TContext>;
  ServiceSpec?: ServiceSpecResolvers.Resolvers<TContext>;
  ServiceMode?: ServiceModeResolvers.Resolvers<TContext>;
  ServiceReplicated?: ServiceReplicatedResolvers.Resolvers<TContext>;
} & { [typeName: string]: never };

export type IDirectiveResolvers<Result> = {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
} & { [directiveName: string]: never };