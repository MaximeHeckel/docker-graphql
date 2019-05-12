import request from "superagent";
import qs from "qs";
import { SecretResolvers } from "../../../types/types";

const Secret: SecretResolvers.Resolvers = {
  services: async (parent, _args, { baseURL }) => {
    const { ID } = parent;
    const filters = {
      secret: [ID]
    };
    const queryParams = qs.stringify({
      filters: JSON.stringify(filters)
    });
    const { body } = await request.get(
      `${baseURL}/services?filters=${encodeURI(JSON.stringify(filters))}`
    );
    return body;
  }
};

export default Secret;
