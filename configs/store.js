import { applyMiddleware, createStore } from 'redux'
import combineReducers from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const composeEnhancers = composeWithDevTools({
  name: 'book',
})
const store = createStore(
  combineReducers,
  composeEnhancers(applyMiddleware(thunk))
)

export default store
