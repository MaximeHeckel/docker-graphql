import { ApolloServer } from "apollo-server";

const serve = ({ schema, context }) => {
  const server = new ApolloServer({
    schema,
    context
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

export default serve;
