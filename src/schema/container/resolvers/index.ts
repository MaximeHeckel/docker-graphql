import request from "superagent";

import { QueryResolvers } from "../../../types/types";

const baseURL = "http+unix://%2Fvar%2Frun%2Fdocker.sock";

const Query: QueryResolvers.Resolvers = {
  containers: async (_parent, _args) => {
    const { body } = await request.get(`${baseURL}/containers/json`);
    return body;
  },
  container: async (_parent, args) => {
    const { id } = args;
    const { body } = await request.get(`${baseURL}/containers/${id}/json`);
    return body;
  }
};

export default { Query };
