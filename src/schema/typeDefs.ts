import global from "./global/typeDefs";
import config from "./config/typeDefs";
import container from "./container/typeDefs";
import image from "./image/typeDefs";
import network from "./network/typeDefs";
import secret from "./secret/typeDefs";
import service from "./service/typeDefs";
import volume from "./volume/typeDefs";

const typeDefs = [
  ...global,
  config,
  container,
  image,
  network,
  secret,
  service,
  volume
];

export default typeDefs;
