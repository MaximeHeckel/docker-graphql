import global from "./global/typeDefs";
import container from "./container/typeDefs";
import secret from "./secret/typeDefs";
import service from "./service/typeDefs";

const typeDefs = [...global, container, secret, service];

export default typeDefs;
