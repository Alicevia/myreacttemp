import {handleActions} from 'redux-actions'
import produce from 'immer'
import {TYPES} from './todolistAction'

const initState = {
  list:[],
  token:9,
  k:[1,2,4]
}

export default handleActions(
  {
    [TYPES.INCREMENT_PLAN](state,action){
      console.log('--',state)
      let a= produce(state,(draft)=>{
        draft.list.push(action.payload)
      })
      return a
      // return {...state,list:[...state.list,action.payload]}
    },
    [TYPES.DECREMENT_PLAN](state,action){
      console.log(action)
      return produce(state,(draft)=>{
        draft.list.splice(action.payload,1)
      })
      // return {...state,list:[...state.list,action.payload]}
    },
  },
  initState
)
