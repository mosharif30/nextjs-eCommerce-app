import mountWithTheme from '../../utils/mountWithTheme'
import InputText from './InputText'
describe('InputText', () => {
  test('render correctly', () => {
    const component = mountWithTheme(<InputText>sample Button</InputText>)
    const tree = component
    expect(tree).toMatchSnapshot()
  })
  test('render correctly placeholder', () => {
    const component = mountWithTheme(
      <InputText placeholder={'sample placeholder'}>sample Button</InputText>
    )
    const tree = component
    expect(tree).toMatchSnapshot()
  })
})
