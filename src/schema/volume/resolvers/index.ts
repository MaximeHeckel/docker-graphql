import request from 'superagent';

import { QueryResolvers } from '../../../types/types';

const Query: QueryResolvers.Resolvers = {
  volumes: async (_parent, _args, { baseURL, authorization }) => {
    const {
      body: { Volumes },
    } = await request
      .get(`${baseURL}/volumes`)
      .set('Authorization', authorization);
    return Volumes;
  },
  volume: async (_parent, args, { baseURL, authorization }) => {
    const { name } = args;
    const { body } = await request
      .get(`${baseURL}/volumes/${name}`)
      .set('Authorization', authorization);
    return body;
  },
};

export default { Query };
