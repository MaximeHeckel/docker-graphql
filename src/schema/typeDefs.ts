import global from "./global/typeDefs";
import container from "./container/typeDefs";
import network from "./network/typeDefs";
import secret from "./secret/typeDefs";
import service from "./service/typeDefs";

const typeDefs = [...global, container, network, secret, service];

export default typeDefs;
