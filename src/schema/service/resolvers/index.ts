import request from 'superagent';
import Service from './Service';

import { QueryResolvers } from '../../../types/types';

const Query: QueryResolvers.Resolvers = {
  services: async (_parent, _args, { baseURL, authorization }) => {
    const { body } = await request
      .get(`${baseURL}/services`)
      .set('Authorization', authorization);
    return body;
  },
  service: async (_parent, args, { baseURL, authorization }) => {
    const { id } = args;
    const { body } = await request
      .get(`${baseURL}/services/${id}`)
      .set('Authorization', authorization);
    return body;
  },
  tasks: async (_parent, _args, { baseURL, authorization }) => {
    const { body } = await request
      .get(`${baseURL}/tasks`)
      .set('Authorization', authorization);
    return body;
  },
  task: async (_parent, args, { baseURL, authorization }) => {
    const { id } = args;
    const { body } = await request
      .get(`${baseURL}/tasks/${id}`)
      .set('Authorization', authorization);
    return body;
  },
};

export default { Query, Service };
