import request from "superagent";
import Service from "./Service";

const baseURL = "http+unix://%2Fvar%2Frun%2Fdocker.sock";

const Query = {
  services: async (parent, args) => {
    return request.get(`${baseURL}/services`).then(res => res.body);
  },
  service: async (parent, args) => {
    const { id } = args;
    return request.get(`${baseURL}/services/${id}`).then(res => res.body);
  }
};

export default { Query, Service };
