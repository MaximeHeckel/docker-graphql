import { ApolloServer } from "apollo-server";
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

const server = new ApolloServer(config);

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

serve(config);
