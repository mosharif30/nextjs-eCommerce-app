import reduxCall from '../utils/reduxCall'

const GET_LIST_BOOK_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: 'https://book-api-mohammadreza.herokuapp.com/books',
      method: 'GET',
      name: 'GET_LIST_BOOK',
    })
  }
}

export { GET_LIST_BOOK_ACTION }
