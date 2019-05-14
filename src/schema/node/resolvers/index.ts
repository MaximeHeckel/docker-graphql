import request from 'superagent';

import { QueryResolvers } from '../../../types/types';

const Query: QueryResolvers.Resolvers = {
  nodes: async (_parent, _args, { baseURL }) => {
    const { body } = await request.get(`${baseURL}/nodes`);
    return body;
  },
  node: async (_parent, args, { baseURL }) => {
    const { id } = args;
    const { body } = await request.get(`${baseURL}/nodes/${id}`);
    return body;
  },
};

export default { Query };
