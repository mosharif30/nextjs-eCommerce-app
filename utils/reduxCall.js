import actionTypes from '../configs/actionTypes'
import fetchUrl from './fetchUrl'

const reduxCall = async (dispatch, { url, method, name }) => {
  dispatch({
    type: actionTypes[`${name}_STARTED`],
    loading: true,
    logged: true,
  })
  try {
    const response = await fetchUrl({ url, method })
    dispatch({
      type: actionTypes[`${name}_SUCCESS`],
      logged: true,
      loading: false,
      response,
    })
  } catch (e) {
    console.log('error', e)
    dispatch({
      type: actionTypes[`${name}_FAILED`],
      logged: false,
      loading: false,

      error: true,
    })
  }
}
export default reduxCall
