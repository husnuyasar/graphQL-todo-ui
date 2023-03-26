import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { client } from "./apolloClient"
import './index.css';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:8080/graphql'
// })

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("access_token");
//   return {
//     headers: {
//       ...headers,
//       authorization :token ? `Bearer ${token}` : "",
//     }
//   }
// })

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });
// client
//   .query({
//     query: gql`
//         query getAll($status: Float!) {
//             getAll(status: $status) {Id,Description,Checked}
//         }
//     `,
//     variables: {status : 0}
//   })
//   .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
