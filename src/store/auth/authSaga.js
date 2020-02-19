import {call,put,takeLatest,select,fork} from 'redux-saga/effects'

import {reqAllUserLoginStatus} from '../../service'
import { authTypes } from './authAction'

function saveStorage(name,value){
  localStorage.setItem(name,value)
}
function clearStorage(name){
  localStorage.removeItem(name)
}

function* signout(action){
  yield call(clearStorage,'token')
  yield put()//这个地方路由跳转
}

function* signin(action){
  try {
    let {succeed,data}=yield call(reqAllUserLoginStatus,action.payload)
    if (succeed) {
      yield put({type:authTypes.AUTH_SUCCESS,payload:data})
    }else{
      yield put({type:authTypes.AUTH_FAILURE})
    }
  } catch (error) {
    yield call(clearStorage,'token')
  }
}

export default function* watchAuthRoot(){
  yield takeLatest(authTypes.AUTH_REQUEST,signin)
  yield takeLatest(authTypes.SIGN_OUT,signout)
}