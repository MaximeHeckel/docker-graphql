import global from "./global/typeDefs";
import container from "./container/typeDefs";
import network from "./network/typeDefs";
import secret from "./secret/typeDefs";
import service from "./service/typeDefs";
import volume from "./volume/typeDefs";

const typeDefs = [...global, container, network, secret, service, volume];

export default typeDefs;
