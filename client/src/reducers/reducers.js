import { combineReducers } from 'redux'
import reducer from '../actions/actions'

export const makeRootReducer = () => {
  return combineReducers({
    t9: reducer
  })
}

export default makeRootReducer