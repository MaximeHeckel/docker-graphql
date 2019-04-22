import request from "superagent";

import { ServiceResolvers } from "../../../types/types";

const baseURL = "http+unix://%2Fvar%2Frun%2Fdocker.sock";

const Service: ServiceResolvers.Resolvers = {
  containers: async (parent, _args) => {
    const { ID } = parent;
    const filters = {
      label: [`com.docker.swarm.service.id=${ID}`]
    };
    const { body } = await request.get(
      `${baseURL}/containers/json?filters=${encodeURI(JSON.stringify(filters))}`
    );

    return body;
  }
};

export default Service;
