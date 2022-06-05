import reducer, {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
} from './cartSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  })
})
test('should handle a book being added to an empty list', () => {
  const previousState = {
    cartItems: [],
  }
  expect(
    reducer(
      previousState,
      addToCart({
        id: '3',
        cartQuantity: 1,
      })
    )
  ).toEqual({
    cartItems: [
      {
        id: '3',
        cartQuantity: 1,
      },
    ],
  })
})

test('should handle a book being removed to an empty list', () => {
  const previousState = {
    cartItems: [
      {
        id: '3',
        cartQuantity: 1,
      },
    ],
  }
  expect(
    reducer(
      previousState,
      removeFromCart({
        id: '3',
        cartQuantity: 1,
      })
    )
  ).toEqual({
    cartItems: [],
  })
})

test('should handle a book being decreased ', () => {
  const previousState = {
    cartItems: [
      {
        id: '3',
        cartQuantity: 3,
      },
    ],
  }
  expect(
    reducer(
      previousState,
      decreaseCart({
        id: '3',
        cartQuantity: 3,
      })
    )
  ).toEqual({
    cartItems: [
      {
        id: '3',
        cartQuantity: 2,
      },
    ],
  })
})
test('should handle a book being decreased to zero ', () => {
  const previousState = {
    cartItems: [
      {
        id: '3',
        cartQuantity: 1,
      },
    ],
  }
  expect(
    reducer(
      previousState,
      decreaseCart({
        id: '3',
        cartQuantity: 1,
      })
    )
  ).toEqual({
    cartItems: [],
  })
})

test('should handle clear cart', () => {
  const previousState = {
    cartItems: [
      {
        id: '3',
        cartQuantity: 5,
      },
      {
        id: '4',
        cartQuantity: 6,
      },
    ],
  }
  expect(reducer(previousState, clearCart())).toEqual({
    cartItems: [],
  })
})
