import global from "./global/typeDefs";
import container from "./container/typeDefs";
import service from "./service/typeDefs";

const typeDefs = [...global, container, service];

export default typeDefs;
