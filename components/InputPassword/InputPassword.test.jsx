import mountWithTheme from '../../utils/mountWithTheme'
import InputPassword from './InputPassword'
describe('InputPassword', () => {
  test('render correctly', () => {
    const component = mountWithTheme(
      <InputPassword>sample Button</InputPassword>
    )
    const tree = component
    expect(tree).toMatchSnapshot()
  })
  test('render correctly placeholder', () => {
    const component = mountWithTheme(
      <InputPassword placeholder={'sample placeholder'}>
        sample Button
      </InputPassword>
    )
    const tree = component
    expect(tree).toMatchSnapshot()
  })
})
