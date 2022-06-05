import mountWithTheme from '../../utils/mountWithTheme'
import Footer from './Footer'
describe('Footer', () => {
  test('render correctly', () => {
    const component = mountWithTheme(<Footer></Footer>)
    const tree = component
    expect(tree).toMatchSnapshot()
  })
})
