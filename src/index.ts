import { baseURL, port } from "./constants";
import schema from "./schema";
import serve from "./server";

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

serve(config);
