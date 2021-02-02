import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import { GRAPHQL_SERVER } from './endpoints'
import Container from './elements/Container';
import TopBar, { TopBarLogo } from './elements/TopBar';
import CalculateForm from './components/CalculateForm'
import danskeBankLogo from './assets/danske-bank-logo.svg';
const client = new ApolloClient({
  uri: GRAPHQL_SERVER,
  cache: new InMemoryCache(),
  
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <TopBar>
          <TopBarLogo src={danskeBankLogo} />
        </TopBar>
        <CalculateForm/>
      </Container>
    </ApolloProvider>
  );
}

export default App;
