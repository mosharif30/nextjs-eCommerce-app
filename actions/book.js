import reduxCall from '../utils/reduxCall'

const GET_LIST_BOOK_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: 'https://my-json-server.typicode.com/mosharif30/bookjson/books',
      method: 'GET',
      name: 'GET_LIST_BOOK',
    })
  }
}

export { GET_LIST_BOOK_ACTION }
