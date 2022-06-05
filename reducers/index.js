import { combineReducers } from 'redux'
import auth from './auth'
import book from './book'
import cartReducer from './cartSlice'
import reducer, {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
} from './cartSlice'
export default combineReducers({
  auth,
  book,
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
  reducer,
  cart: cartReducer,
})
