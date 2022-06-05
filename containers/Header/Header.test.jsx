import mountWithTheme from '../../utils/mountWithTheme'
import Header from './Header'
import { Provider } from 'react-redux'
import { store, persistedStore } from '../../configs/store'
import { PersistGate } from 'redux-persist/integration/react'

describe('Header', () => {
  test('render correctly', () => {
    const component = mountWithTheme(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <Header></Header>
        </PersistGate>
      </Provider>
    )
    const tree = component
    expect(tree).toMatchSnapshot()
  })
})
