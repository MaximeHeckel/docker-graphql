import request from 'superagent';
import ContainerInspect from './Container';

import { QueryResolvers } from '../../../types/types';

const Query: QueryResolvers.Resolvers = {
  containers: async (_parent, _args, { baseURL, authorization }) => {
    const { body } = await request
      .get(`${baseURL}/containers/json`)
      .set('Authorization', authorization);
    return body;
  },
  container: async (_parent, args, { baseURL, authorization }) => {
    const { id } = args;
    const { body } = await request
      .get(`${baseURL}/containers/${id}/json`)
      .set('Authorization', authorization);
    return body;
  },
};

export default { Query, ContainerInspect };
