import {call,put,takeEvery,select,fork,delay} from 'redux-saga/effects'

import {reqAllUserLoginStatus} from '../../service'
import { TYPES } from './todolistAction'

function saveStorage(name,value){
  localStorage.setItem(name,value)
}
function clearStorage(name){
  localStorage.removeItem(name)
}

// function* signout(action){
//   yield call(clearStorage,'token')
//   yield put()//这个地方路由跳转
// }

// function* signin(action){
//   try {
//     let {succeed,data}=yield call(reqAllUserLoginStatus,action.payload)
//     if (succeed) {
//       yield put({type:authTypes.AUTH_SUCCESS,payload:data})
//     }else{
//       yield put({type:authTypes.AUTH_FAILURE})
//     }
//   } catch (error) {
//     yield call(clearStorage,'token')
//   }
// }
function* asyncDeletePlan(action){
  yield delay(1999)
  yield put({type:TYPES.DECREMENT_PLAN,payload:action.payload})

}


export default function* watchAuthRoot(){
  yield takeEvery(TYPES.ASYNC_DECREMENT_PLAN,asyncDeletePlan)
  // yield takeLatest(authTypes.AUTH_REQUEST,signin)
  // yield takeLatest(authTypes.SIGN_OUT,signout)
}