import reduxCall from '../utils/reduxCall'

const LOGIN_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: '/login',
      method: 'GET',
      name: 'LOGIN',
    })
  }
}
// https://my-json-server.typicode.com/mosharif30/bookjson
const REGISTER_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: '/register',
      method: 'GET',
      name: 'REGISTER',
    })
  }
}
export { LOGIN_ACTION, REGISTER_ACTION }
