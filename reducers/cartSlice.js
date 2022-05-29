import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
//  localStorage.getItem('cartItems')
//    ? JSON.parse(localStorage.getItem('cartItems'))
//    : []
const ISSERVER = typeof window === 'undefined'
if (!ISSERVER) {
  var cartItems = JSON.parse(localStorage.getItem('cartItems'))
} else {
  var cartItems = []
}
const initialState = {
  cartItems: cartItems ? cartItems : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
        toast.info(`کتاب ${action.payload.name}  زیاد شد `, {
          position: 'bottom-center',
        })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
        toast.success(`کتاب ${action.payload.name} اضافه شد `, {
          position: 'bottom-center',
        })
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeFromCart(state, action) {
      const nextCartitems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      )

      localStorage.setItem('cartItems', JSON.stringify(nextCartitems))
      state.cartItems = nextCartitems
      toast.error(`کتاب ${action.payload.name} حذف شد `, {
        position: 'bottom-center',
      })
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
