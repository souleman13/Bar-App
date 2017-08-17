import {
    ApolloClient,
    createNetworkInterface
} from 'react-apollo';

export const Client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'https://api.graph.cool/simple/v1/cj5mv4u71mtg70134o25zotki',
    }),
});



