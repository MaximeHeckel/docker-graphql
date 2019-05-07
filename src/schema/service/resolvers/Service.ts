import request from "superagent";

import { ServiceResolvers } from "../../../types/types";

const Service: ServiceResolvers.Resolvers = {
  containers: async (parent, _args, { baseURL }) => {
    const { ID } = parent;
    const filters = {
      label: [`com.docker.swarm.service.id=${ID}`]
    };
    const { body } = await request.get(
      `${baseURL}/containers/json?filters=${encodeURI(JSON.stringify(filters))}`
    );

    return body;
  },
  secrets: async (parent, _args, { baseURL }) => {
    const { ID } = parent;
    const filters = {
      service: {
        [ID]: true
      }
    };
    const { body } = await request.get(
      `${baseURL}/secrets?filters=${encodeURI(JSON.stringify(filters))}`
    );

    return body;
  },
  tasks: async (parent, _args, { baseURL }) => {
    const { ID } = parent;
    const filters = {
      service: {
        [ID]: true
      }
    };
    const { body } = await request.get(
      `${baseURL}/tasks?filters=${encodeURI(JSON.stringify(filters))}`
    );

    return body;
  }
};

export default Service;
