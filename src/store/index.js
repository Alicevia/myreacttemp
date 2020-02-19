import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import rootReducer from './reducers'
import rootSaga from './sagas'

import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const storageConfig = {
  key: 'root', // 必须有的
  storage, // 缓存机制
  whitelist: ['todolist'] // reducer 里持久化的数据,除此外均为不持久化数据
}
const myPersistReducer = persistReducer(storageConfig,rootReducer(history))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history)
  )
)
let preloadedState = {}
const store = createStore(
  myPersistReducer,
  // rootReducer(history),
  preloadedState,
  enhancer
)
// const store = applyMiddleware(sagaMiddleware)(createStore)(reducer)
export const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)
export default store