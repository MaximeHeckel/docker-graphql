import request from 'superagent';

import { QueryResolvers } from '../../../types/types';

const Query: QueryResolvers.Resolvers = {
  images: async (_parent, _args, { baseURL, authorization }) => {
    const { body } = await request
      .get(`${baseURL}/images/json`)
      .set('Authorization', authorization);
    return body;
  },
  image: async (_parent, args, { baseURL, authorization }) => {
    const { name } = args;
    const { body } = await request
      .get(`${baseURL}/images/${name}/json`)
      .set('Authorization', authorization);
    return body;
  },
};

export default { Query };
