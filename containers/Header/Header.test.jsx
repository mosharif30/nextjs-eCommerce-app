import mountWithTheme from '../../utils/mountWithTheme'
import Header from './Header'
import { Provider } from 'react-redux'
import store from '../../configs/store'
describe('Header', () => {
  test('render correctly', () => {
    const component = mountWithTheme(
      <Provider store={store}>
        <Header></Header>
      </Provider>
    )
    const tree = component
    expect(tree).toMatchSnapshot()
  })
})
