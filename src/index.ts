import schema from "./schema";
import serve from "./server";

const config = {
  schema,
  context: ({ req }) => {
    return {
      authorization: req.headers.authorization
    };
  }
};

serve(config);
