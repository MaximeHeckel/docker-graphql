import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    volumes: [Volume!]!
    volume(name: String!): VolumeInspect
  }

  type Volume {
    CreatedAt: String!
    Name: String!
    Driver: String!
    Mountpoint: String!
    Labels: JSON
    Scope: VolumeScope!
    Options: VolumeOptions
  }

  type VolumeOptions {
    device: String!
    o: String!
    type: String!
  }

  enum VolumeScope {
    local
    global
  }

  type VolumeInspect {
    Name: String!
    Driver: String!
    Mountpoint: String!
    Status: JSON
    Labels: JSON
    Scope: VolumeScope
  }
`;

export default typeDefs;
