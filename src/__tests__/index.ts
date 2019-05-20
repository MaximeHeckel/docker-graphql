import { ApolloServer } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import { gql } from 'apollo-server';
import { baseURL } from '../constants';
import typeDefs from '../schema/typeDefs';

const mocks = {}; // Mock any type in this object

const resolvers = {
  Query: {
    services: () => {
      body: [
        {
          ID: '9mnpnzenvg8p8tdbtq4wvbkcz',
          Version: {
            Index: 19,
          },
          CreatedAt: '2016-06-07T21:05:51.880065305Z',
          UpdatedAt: '2016-06-07T21:07:29.962229872Z',
          Spec: {
            Name: 'hopeful_cori',
            TaskTemplate: {
              ContainerSpec: {
                Image: 'redis',
              },
              Resources: {
                Limits: {},
                Reservations: {},
              },
              RestartPolicy: {
                Condition: 'any',
                MaxAttempts: 0,
              },
              Placement: {},
              ForceUpdate: 0,
            },
            Mode: {
              Replicated: {
                Replicas: 1,
              },
            },
            UpdateConfig: {
              Parallelism: 1,
              Delay: 1000000000,
              FailureAction: 'pause',
              Monitor: 15000000000,
              MaxFailureRatio: 0.15,
            },
            RollbackConfig: {
              Parallelism: 1,
              Delay: 1000000000,
              FailureAction: 'pause',
              Monitor: 15000000000,
              MaxFailureRatio: 0.15,
            },
            EndpointSpec: {
              Mode: 'vip',
              Ports: [
                {
                  Protocol: 'tcp',
                  TargetPort: 6379,
                  PublishedPort: 30001,
                },
              ],
            },
          },
          Endpoint: {
            Spec: {
              Mode: 'vip',
              Ports: [
                {
                  Protocol: 'tcp',
                  TargetPort: 6379,
                  PublishedPort: 30001,
                },
              ],
            },
            Ports: [
              {
                Protocol: 'tcp',
                TargetPort: 6379,
                PublishedPort: 30001,
              },
            ],
            VirtualIPs: [
              {
                NetworkID: '4qvuz4ko70xaltuqbt8956gd1',
                Addr: '10.255.0.2/16',
              },
              {
                NetworkID: '4qvuz4ko70xaltuqbt8956gd1',
                Addr: '10.255.0.3/16',
              },
            ],
          },
        },
      ];
    },
  },
};

const constructTestServer = ({ context }) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    mocks,
  });

  return { server };
};

const GET_SERVICES = gql`
  query {
    services {
      ID
      Spec {
        Name
      }
    }
  }
`;

describe('Integration tests', () => {
  it('Fetches the list of services', async () => {
    const { server } = constructTestServer({
      context: () => ({ baseURL }),
    });

    const { query } = createTestClient(server);

    const res = await query({ query: GET_SERVICES });
    expect(res.data.services).toMatchSnapshot();
  });
});
