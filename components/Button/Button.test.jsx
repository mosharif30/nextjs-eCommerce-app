import mountWithTheme from '../../utils/mountWithTheme'
import Button from './Button'
describe('button', () => {
  test('render correctly', () => {
    const component = mountWithTheme(<Button>sample Button</Button>)
    const tree = component
    expect(tree).toMatchSnapshot()
  })
  test('render correctly secondary', () => {
    const component = mountWithTheme(
      <Button secondary>sample Button secondary</Button>
    )
    const tree = component
    expect(tree).toMatchSnapshot()
  })
  test('render correctly loading', () => {
    const component = mountWithTheme(
      <Button loading>sample Button loading</Button>
    )
    const tree = component
    expect(tree).toMatchSnapshot()
  })
  test('render correctly danger', () => {
    const component = mountWithTheme(
      <Button danger>sample Button danger</Button>
    )
    const tree = component
    expect(tree).toMatchSnapshot()
  })
})
