import merge from "lodash/merge";

import service from "./service/resolvers";

const resolvers = merge(service);

export default resolvers;
