import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";
  import ExampleQuery from './queries/example.graphql';
//   import * as file from './queries/example.graphql';
// console.log(file);

  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });

  export default async function(query){
    //console.log(ExampleQuery)
    return client
    .query({
      query: 
        ExampleQuery
    });
  }
  