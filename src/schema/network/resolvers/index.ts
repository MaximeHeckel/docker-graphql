import request from 'superagent';
import { QueryResolvers } from '../../../types/types';

const Query: QueryResolvers.Resolvers = {
  networks: async (_parent, _args, { baseURL, authorization }) => {
    const { body } = await request
      .get(`${baseURL}/networks`)
      .set('Authorization', authorization);
    return body;
  },
  network: async (_parent, args, { baseURL, authorization }) => {
    const { id } = args;
    const { body } = await request
      .get(`${baseURL}/networks/${id}`)
      .set('Authorization', authorization);
    return body;
  },
};

export default { Query };
