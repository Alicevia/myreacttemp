import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import store, { history, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import './assets/css/normalize.css'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App></App>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)