import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import auth from './auth/authReducer'
import todolist from './todolist/todolistReducer'


export default (history)=> combineReducers({
  router:connectRouter(history),
  auth,
  todolist
})