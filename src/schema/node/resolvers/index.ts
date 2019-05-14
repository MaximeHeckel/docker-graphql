import request from 'superagent';

import { QueryResolvers } from '../../../types/types';

const Query: QueryResolvers.Resolvers = {
  nodes: async (_parent, _args, { baseURL, authorization }) => {
    const { body } = await request
      .get(`${baseURL}/nodes`)
      .set('Authorization', authorization);
    return body;
  },
  node: async (_parent, args, { baseURL, authorization }) => {
    const { id } = args;
    const { body } = await request
      .get(`${baseURL}/nodes/${id}`)
      .set('Authorization', authorization);
    return body;
  },
};

export default { Query };
