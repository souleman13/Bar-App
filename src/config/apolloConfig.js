import {
    ApolloClient,
    createNetworkInterface
} from 'react-apollo';

const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj5mv4u71mtg70134o25zotki',
});

networkInterface.use([{
    applyMiddleware(req, next) {
        if (!req.options.headers) {
            req.options.headers = {};  // Create the header object if needed.
        }
        // get the authentication token from local storage if it exists
        const token = localStorage.getItem('token');
        req.options.headers.authorization = token ? `Bearer ${token}` : null;
        next();
    }
}]);

export const Client = new ApolloClient({
    networkInterface,
});



// export const Client = new ApolloClient({
//     networkInterface: createNetworkInterface({
//         uri: 'https://api.graph.cool/simple/v1/cj5mv4u71mtg70134o25zotki',
//     }),
// });



