import request from 'superagent';

import { QueryResolvers } from '../../../types/types';

const Query: QueryResolvers.Resolvers = {
  configs: async (_parent, _args, { baseURL, authorization }) => {
    const { body } = await request
      .get(`${baseURL}/configs`)
      .set('Authorization', authorization);
    return body;
  },
  config: async (_parent, args, { baseURL, authorization }) => {
    const { id } = args;
    const { body } = await request
      .get(`${baseURL}/configs/${id}`)
      .set('Authorization', authorization);
    return body;
  },
};

export default { Query };
