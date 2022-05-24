import actionTypes from '../configs/actionTypes'

const auth = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOGIN_STARTED:
      return {
        ...state,
        ...action,
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action,
      }
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        ...action,
      }

    default:
      return state
  }
}
export default auth
