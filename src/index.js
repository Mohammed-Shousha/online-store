import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
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
   createHttpLink,
} from "@apollo/client"

const link = createHttpLink({
   uri: "https://online-store-apollo-server.herokuapp.com/graphql",
   // uri: "http://localhost:4000/graphql",
   credentials: 'include'
})


const client = new ApolloClient({
   link,
   cache: new InMemoryCache()
})

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
   <React.StrictMode>
      <Suspense fallback={<Loading />}>
         <ApolloProvider client={client}>
            <GoogleOAuthProvider clientId={clientId}>
            <ContextProvider>
               <App />
            </ContextProvider>
            </GoogleOAuthProvider>
         </ApolloProvider>
      </Suspense>
   </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

