import { ApolloServer } from "apollo-server";

const serve = ({ port, schema, context }) => {
  const server = new ApolloServer({
    schema,
    context
  });

  server.listen(port).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

export default serve;
