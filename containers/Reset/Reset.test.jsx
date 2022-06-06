import mountWithTheme from '../../utils/mountWithTheme'
import Reset from './Reset'
import { Provider } from 'react-redux'
import { store, persistedStore } from '../../configs/store'
import { PersistGate } from 'redux-persist/integration/react'

describe('Header', () => {
  test('render correctly', async () => {
    const component = mountWithTheme(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <Reset></Reset>
        </PersistGate>
      </Provider>
    )
    const tree = component
    expect(tree).toMatchSnapshot()
  })
})
