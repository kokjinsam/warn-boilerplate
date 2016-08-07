import ApolloClient, {
  createNetworkInterface,
  addTypename,
} from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('http://localhost:3000/graphql'),
  queryTransformer: addTypename,
  dataIdFromObject: (result) => {
    if (result._id && result.__typename) {
      return result.__type + result.id;
    }

    return null;
  },
  shouldBatch: true,
});

export default client;
