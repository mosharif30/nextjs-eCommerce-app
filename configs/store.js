import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const composeEnhancers = composeWithDevTools({
  name: 'jobb',
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
