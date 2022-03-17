import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`{
      launches{
        flight_number
        mission_name
        rocket {
          rocket_name
        }
        launch_success
      }
    }
    `
  })
  .then(result => console.log(result));





ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);
