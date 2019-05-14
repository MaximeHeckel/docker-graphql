import request from 'superagent';

// import { ServiceResolvers } from "../../../types/types";

const Container = {
  service: async (parent, _args, { baseURL, authorization }) => {
    const {
      Config: { Labels },
    } = parent;
    const serviceID = Labels['com.docker.swarm.service.id'];
    const { body } = await request
      .get(`${baseURL}/services/${serviceID}`)
      .set('Authorization', authorization);

    return body;
  },
};

export default Container;
