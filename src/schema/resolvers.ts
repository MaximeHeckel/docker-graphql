import merge from "lodash/merge";
import config from "./config/resolvers";
import container from "./container/resolvers";
import network from "./network/resolvers";
import secret from "./secret/resolvers";
import service from "./service/resolvers";
import volume from "./volume/resolvers";

const resolvers = merge(config, container, network, secret, service, volume);

export default resolvers;
