import request from 'superagent';
import get from 'lodash/get';
import {
  ServiceResolvers,
  Secret,
  Config,
  ContainerSpecConfigType,
  ContainerSpecSecretType,
} from '../../../types/types';

const Service: ServiceResolvers.Resolvers = {
  containers: async (parent, _args, { baseURL, authorization }) => {
    const { ID } = parent;
    const filters = {
      label: [`com.docker.swarm.service.id=${ID}`],
    };
    const { body } = await request
      .get(
        `${baseURL}/containers/json?filters=${encodeURI(
          JSON.stringify(filters),
        )}`,
      )
      .set('Authorization', authorization);

    return body;
  },
  secrets: async (parent, _args, { baseURL, authorization }) => {
    const { Spec } = parent;
    const secrets = get(Spec, 'TaskTemplate.ContainerSpec.Secrets', null);
    const secretsIDs = secrets.map(
      (secret: ContainerSpecSecretType) => secret.SecretID,
    );

    const { body } = await request
      .get(`${baseURL}/secrets`)
      .set('Authorization', authorization);

    const result = body.filter((secret: Secret) =>
      secretsIDs.includes(secret.ID),
    );

    return result;
  },
  configs: async (parent, _args, { baseURL, authorization }) => {
    const { Spec } = parent;
    const configs = get(Spec, 'TaskTemplate.ContainerSpec.Configs', null);
    const configsIDs = configs.map(
      (config: ContainerSpecConfigType) => config.ConfigID,
    );

    const { body } = await request
      .get(`${baseURL}/configs`)
      .set('Authorization', authorization);

    const result = body.filter((config: Config) =>
      configsIDs.includes(config.ID),
    );

    return result;
  },
  tasks: async (parent, _args, { baseURL, authorization }) => {
    const { ID } = parent;
    const filters = {
      service: {
        [ID]: true,
      },
    };
    const { body } = await request.get(
      `${baseURL}/tasks?filters=${encodeURI(JSON.stringify(filters))}`,
    );

    return body;
  },
};

export default Service;
