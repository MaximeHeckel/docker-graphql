import request from 'superagent';

import { QueryResolvers } from '../../../types/types';

const Query: QueryResolvers.Resolvers = {
  secrets: async (_parent, _args, { baseURL }) => {
    const { body } = await request.get(`${baseURL}/secrets`);
    return body;
  },
  secret: async (_parent, args, { baseURL }) => {
    const { id } = args;
    const { body } = await request.get(`${baseURL}/secrets/${id}`);
    return body;
  },
};

export default { Query };
