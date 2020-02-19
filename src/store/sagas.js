import {all,fork} from 'redux-saga/effects'
import todolistSaga from './todolist/todolistSaga'
export default function* rootSaga(){
  yield all([fork(todolistSaga)])
}