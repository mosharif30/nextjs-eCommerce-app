import reduxCall from '../utils/reduxCall'

const LOGIN_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: 'https://my-json-server.typicode.com/mosharif30/bookjson/login',
      method: 'GET',
      name: 'LOGIN',
    })
  }
}

const REGISTER_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: 'https://my-json-server.typicode.com/mosharif30/bookjson/register',
      method: 'GET',
      name: 'REGISTER',
    })
  }
}
export { LOGIN_ACTION, REGISTER_ACTION }
