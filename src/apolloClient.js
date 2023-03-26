import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: 'http://localhost:8080/graphql'
  })
  
const authLink = setContext((_, { headers }) => {
const token = localStorage.getItem("access_token");
    return {
        headers: {
        ...headers,
        authorization :token ? `Bearer ${token}` : "",
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export {client};