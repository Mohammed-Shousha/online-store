import React, { Suspense } from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import Loading from './Components/Loading'
import * as serviceWorker from './serviceWorker'
import ContextProvider from './Data/ContextProvider'
import './i18n'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client"

const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});


render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <ApolloProvider client={client}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </ApolloProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

