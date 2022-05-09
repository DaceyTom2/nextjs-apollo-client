import {
    ApolloClient,
    HttpLink,
    InMemoryCache
  } from "@apollo/client";

  import { onError } from "@apollo/client/link/error";
  import ExampleQuery from './queries/example.graphql';
  import DCExample from './queries/dc.graphql';
  import SandboxQuery from './queries/sandbox.graphql'

  const link = new HttpLink({ uri: "https://www.canada.ca/content/_cq_graphql/decd-endc/endpoint.json",
    headers:{
      'User-Agent': 'sc-digital-centre/1.0.0',
    } });

  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });

  export default async function(){
    return client
    .query({
      query: 
        SandboxQuery
    }).catch((error) => { console.log( error ) })
  }
  