import request from "superagent";

import { QueryResolvers } from "../../../types/types";

const baseURL = "http+unix://%2Fvar%2Frun%2Fdocker.sock";

const Query: QueryResolvers.Resolvers = {
  containers: async (_parent, _args) => {
    return request.get(`${baseURL}/containers/json`).then(res => res.body);
  },
  container: async (_parent, args) => {
    const { id } = args;
    return request
      .get(`${baseURL}/containers/${id}/json`)
      .then(res => res.body);
  }
};

export default { Query };
