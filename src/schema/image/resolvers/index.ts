import request from 'superagent';

import { QueryResolvers } from '../../../types/types';

const Query: QueryResolvers.Resolvers = {
  images: async (_parent, _args, { baseURL }) => {
    const { body } = await request.get(`${baseURL}/images/json`);
    return body;
  },
  image: async (_parent, args, { baseURL }) => {
    const { name } = args;
    const { body } = await request.get(`${baseURL}/images/${name}/json`);
    return body;
  },
};

export default { Query };
