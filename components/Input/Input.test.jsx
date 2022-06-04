import mountWithTheme from '../../utils/mountWithTheme'
import Input from './Input'
describe('Input', () => {
  test('render correctly', () => {
    const component = mountWithTheme(<Input>sample Button</Input>)
    const tree = component
    expect(tree).toMatchSnapshot()
  })
  test('render correctly placeholder', () => {
    const component = mountWithTheme(<Input placeholder={"sample placeholder"}>sample Button</Input>)
    const tree = component
    expect(tree).toMatchSnapshot()
  })
})
