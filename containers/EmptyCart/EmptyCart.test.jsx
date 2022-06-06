import mountWithTheme from '../../utils/mountWithTheme'
import EmptyCart from './EmptyCart'
describe('EmptyCart', () => {
  test('render correctly', async () => {
    const component = mountWithTheme(<EmptyCart></EmptyCart>)
    const tree = component
    expect(tree).toMatchSnapshot()
  })
})
