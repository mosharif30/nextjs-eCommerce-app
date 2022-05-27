import reduxCall from '../utils/reduxCall'

const LOGIN_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: 'https://book-api-mohammadreza.herokuapp.com/login',
      method: 'GET',
      name: 'LOGIN',
    })
  }
}

const REGISTER_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: 'https://book-api-mohammadreza.herokuapp.com/register',
      method: 'GET',
      name: 'REGISTER',
    })
  }
}
export { LOGIN_ACTION, REGISTER_ACTION }
