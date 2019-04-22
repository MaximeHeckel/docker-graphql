import request from "superagent";

const baseURL = "http+unix://%2Fvar%2Frun%2Fdocker.sock";

const Query = {
  containers: async (parent, args) => {
    return request.get(`${baseURL}/containers/json`).then(res => res.body);
  },
  container: async (parent, args) => {
    const { id } = args;
    return request
      .get(`${baseURL}/containers/${id}/json`)
      .then(res => res.body);
  }
};

export default { Query };
