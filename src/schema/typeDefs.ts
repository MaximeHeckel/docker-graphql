import globals from './globals/typeDefs';
import config from './config/typeDefs';
import container from './container/typeDefs';
import image from './image/typeDefs';
import network from './network/typeDefs';
import node from './node/typeDefs';
import secret from './secret/typeDefs';
import service from './service/typeDefs';
import volume from './volume/typeDefs';

const typeDefs = [
  ...globals,
  config,
  container,
  image,
  network,
  node,
  secret,
  service,
  volume,
];

export default typeDefs;
