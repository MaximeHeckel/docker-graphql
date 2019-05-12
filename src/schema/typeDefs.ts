import global from "./global/typeDefs";
import config from "./config/typeDefs";
import container from "./container/typeDefs";
import network from "./network/typeDefs";
import secret from "./secret/typeDefs";
import service from "./service/typeDefs";
import volume from "./volume/typeDefs";

const typeDefs = [
  ...global,
  config,
  container,
  network,
  secret,
  service,
  volume
];

export default typeDefs;
