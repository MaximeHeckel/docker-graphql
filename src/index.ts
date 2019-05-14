import { baseURL, port } from "./constants";
import checkEngine from "./checkEngine";
import schema from "./schema";
import server from "./server";
import request from "superagent";

const config = {
  port,
  schema,
  context: ({ req }) => {
    return {
      baseURL,
      authorization: req.headers.authorization
    };
  }
};

checkEngine(baseURL)
  .then(() => server(config))
  .catch(() => process.exit(1));
