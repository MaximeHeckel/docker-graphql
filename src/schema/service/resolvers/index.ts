import request from "superagent";
import Service from "./Service";

import { QueryResolvers } from "../../../types/types";

const baseURL = "http+unix://%2Fvar%2Frun%2Fdocker.sock";

const Query: QueryResolvers.Resolvers = {
  services: async (_parent, _args) => {
    const { body } = await request.get(`${baseURL}/services`);
    return body;
  },
  service: async (_parent, args) => {
    const { id } = args;
    const { body } = await request.get(`${baseURL}/services/${id}`);
    return body;
  }
};

export default { Query, Service };
