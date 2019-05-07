import merge from "lodash/merge";
import container from "./container/resolvers";
import secret from "./secret/resolvers";
import service from "./service/resolvers";

const resolvers = merge(container, secret, service);

export default resolvers;
