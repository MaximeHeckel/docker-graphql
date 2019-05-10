import request from "superagent";
import Service from "./Service";

import { QueryResolvers } from "../../../types/types";

const Query: QueryResolvers.Resolvers = {
  services: async (_parent, _args, { baseURL }) => {
    const { body } = await request.get(`${baseURL}/services`);
    return body;
  },
  service: async (_parent, args, { baseURL }) => {
    const { id } = args;
    const { body } = await request.get(`${baseURL}/services/${id}`);
    return body;
  },
  tasks: async (_parent, _args, { baseURL }) => {
    const { body } = await request.get(`${baseURL}/tasks`);
    return body;
  },
  task: async (_parent, args, { baseURL }) => {
    const { id } = args;
    const { body } = await request.get(`${baseURL}/tasks/${id}`);
    return body;
  }
};

export default { Query, Service };
