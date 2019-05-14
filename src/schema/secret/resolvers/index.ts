import request from 'superagent';

import { QueryResolvers } from '../../../types/types';

const Query: QueryResolvers.Resolvers = {
  secrets: async (_parent, _args, { baseURL, authorization }) => {
    const { body } = await request
      .get(`${baseURL}/secrets`)
      .set('Authorization', authorization);
    return body;
  },
  secret: async (_parent, args, { baseURL, authorization }) => {
    const { id } = args;
    const { body } = await request
      .get(`${baseURL}/secrets/${id}`)
      .set('Authorization', authorization);
    return body;
  },
};

export default { Query };
