import request from "superagent";

const baseURL = "http+unix://%2Fvar%2Frun%2Fdocker.sock";

const Service = {
  containers: (parent, args) => {
    const { ID } = parent;
    const filters = {
      label: [`com.docker.swarm.service.id=${ID}`]
    };
    return request
      .get(
        `${baseURL}/containers/json?filters=${encodeURI(
          JSON.stringify(filters)
        )}`
      )
      .then(res => res.body);
  }
};

export default Service;
