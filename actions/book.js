import reduxCall from '../utils/reduxCall'

const GET_LIST_BOOK_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: 'http://127.0.0.1:5000/books.json',
      method: 'GET',
      name: 'GET_LIST_BOOK',
    })
  }
}

export { GET_LIST_BOOK_ACTION }
