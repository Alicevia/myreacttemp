import {createActions} from 'redux-actions'
export const TYPES = {
  INCREMENT_PLAN: "INCREMENT_PLAN",
  DECREMENT_PLAN:'DECREMENT_PLAN',
  ASYNC_DECREMENT_PLAN:'ASYNC_DECREMENT_PLAN'
}

export default createActions({
  [TYPES.INCREMENT_PLAN]: (data)=>{
    return data
  },
  [TYPES.ASYNC_DECREMENT_PLAN]: (data)=>{
    return data
  },

  
})