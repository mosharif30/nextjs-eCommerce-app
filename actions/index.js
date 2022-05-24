import actionTypes from '../configs/actionTypes'
import fetchUrl from '../utils/fetchUrl'
import reduxCall from '../utils/reduxCall'

const LOGIN_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: 'http://127.0.0.1:5000/login.json',
      method: 'GET',
      name: 'LOGIN',
    })
  }
}
export { LOGIN_ACTION }
