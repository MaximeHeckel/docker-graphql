import request from 'superagent';
import { QueryResolvers } from '../../../types/types';

const Query: QueryResolvers.Resolvers = {
  networks: async (_parent, _args, { baseURL }) => {
    const { body } = await request.get(`${baseURL}/networks`);
    return body;
  },
  network: async (_parent, args, { baseURL }) => {
    const { id } = args;
    const { body } = await request.get(`${baseURL}/networks/${id}`);
    return body;
  },
};

export default { Query };
