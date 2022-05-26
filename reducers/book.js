import actionTypes from '../configs/actionTypes'

const book = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_LIST_BOOK_STARTED:
      return {
        ...state,
        loading: action.loading,
      }
    case actionTypes.GET_LIST_BOOK_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        books: action.response,
      }
    case actionTypes.GET_LIST_BOOK_FAILED:
      return {
        ...state,
        ...action,
      }

    default:
      return state
  }
}
export default book
