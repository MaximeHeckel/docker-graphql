# Docker GraphQL

A GraphQL interface for the Docker API

# Why

I've worked with the Docker API for the past 5 years and I've identified along the years how the different resources are architected / related with each other. I've never taken the time to get started seriously with GraphQL and I know the Docker API and how it could be better and easier to use. So, I thought this would be the perfect project to learn more about it and build something that matters.

# Contributing

Considering you have either Docker or Docker Desktop (I personally only tested that on macOS, I'll take time to test on Windows):

## Running the project

1. Clone the repository
2. From the root of the project run `yarn` or `npm install` to install the required dependencies
3. Run `yarn start` or `npm run start` to start the server. If you want to start the server for dev you can run `yarn start:dev` or `npm run start:dev`. This will start nodemon and the GraphgQL server and watch for file changes.

You can then access the GraphiQl interface by going to [http://localhost:4000](http://localhost:4000)

The default the port is set to 4000, it can be overriden with the `PORT` environment variable.

The default server is set to be the docker unix socket at `/var/run/docker.sock`. This can be overriden with the `BASE_URL` environment variable.

All the constants in this project are defined in `src/constants.ts`.

## Generating types from schema

This project relies on [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator) to generate types from the schema. To generate the types run `yarn generate` or `npm run generate`.

# Roadmap

- [x] Add all Docker types in schema
- [x] Implement resolvers for main Docker types
- [ ] Ability to query related resources (i.e. query containers within a service etc) (IN PROGRESS)
- [ ] Fully type the server (IN PROGRESS)
- [ ] Support for filters in query based on the API spec
- [ ] Write tests (I still need to figure out what is the proper way / strategy to test this server)
- [ ] Dockerize the project for easy setup

Still under consideration:

- Mutations: this project initially focuses on queries. Mutations were not a priority nor a motivation to start this project, hence they are not a priority yet.
- Subscriptions: there might be a few use cases, but at this moment it is not a priority for this project.
- Support for Kubernetes: the initial scope for this project was to wrap the Docker API, however supporting Kubernetes is not off the table.

# Queries examples

Here are some queries that can be ran on this GraphQL server:

- Listing services:

```
query {
  services {
    ID
    Spec {
      Name
    }
  }
}
```

- Listing services with related tasks and containers:

```
query {
  tasks {
    ID
    NodeID
  }
  containers {
    Names
  }
  services {
    ID
    Spec {
      Name
    }
  }
}
```
