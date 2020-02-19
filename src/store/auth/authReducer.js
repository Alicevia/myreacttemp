import {handleActions} from 'redux-actions'
import {authTypes} from './authAction'

const initState = {
  user:null,
  token:''
}

export default handleActions(
  {
    [authTypes.AUTH_SUCCESS](state,action){
      return state.merge({
        user:action.data.user,
        token:action.data.token
      })
    },
    [authTypes.SIGN_OUT](state,action){
      return state.merge({
        user:null,
        token:''
      })
    },
  },
  initState
)
