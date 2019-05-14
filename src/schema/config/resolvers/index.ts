import request from 'superagent';

import { QueryResolvers } from '../../../types/types';

const Query: QueryResolvers.Resolvers = {
  configs: async (_parent, _args, { baseURL }) => {
    const { body } = await request.get(`${baseURL}/configs`);
    return body;
  },
  config: async (_parent, args, { baseURL }) => {
    const { id } = args;
    const { body } = await request.get(`${baseURL}/configs/${id}`);
    return body;
  },
};

export default { Query };
