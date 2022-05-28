import { combineReducers } from 'redux'
import auth from './auth'
import book from './book'
import cartReducer from './cartSlice'

export default combineReducers({
  auth,
  book,
  cart: cartReducer,
})
