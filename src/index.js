import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Loading from './Components/Loading'
import * as serviceWorker from './serviceWorker'
import ContextProvider from './Data/ContextProvider'
import './i18n'


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
    <ContextProvider>
      <App />
    </ContextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

