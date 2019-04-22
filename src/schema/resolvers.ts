import merge from "lodash/merge";
import container from "./container/resolvers";
import service from "./service/resolvers";

const resolvers = merge(container, service);

export default resolvers;
