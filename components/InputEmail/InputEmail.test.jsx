import mountWithTheme from '../../utils/mountWithTheme'
import InputEmail from './InputEmail'
describe('InputEmail', () => {
  test('render correctly', () => {
    const component = mountWithTheme(<InputEmail>sample Button</InputEmail>)
    const tree = component
    expect(tree).toMatchSnapshot()
  })
  test('render correctly placeholder', () => {
    const component = mountWithTheme(
      <InputEmail placeholder={'sample placeholder'}>sample Button</InputEmail>
    )
    const tree = component
    expect(tree).toMatchSnapshot()
  })
})
