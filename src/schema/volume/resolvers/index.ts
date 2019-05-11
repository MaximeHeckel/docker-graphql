import request from "superagent";

import { QueryResolvers } from "../../../types/types";

const baseURL = "http+unix://%2Fvar%2Frun%2Fdocker.sock";

const Query: QueryResolvers.Resolvers = {
  volumes: async (_parent, _args) => {
    const {
      body: { Volumes }
    } = await request.get(`${baseURL}/volumes`);
    return Volumes;
  },
  volume: async (_parent, args) => {
    const { name } = args;
    const { body } = await request.get(`${baseURL}/volumes/${name}`);
    return body;
  }
};

export default { Query };
