import { render } from '@testing-library/react'
import mountWithTheme from '../../utils/mountWithTheme'
import FormControl from './FormControl'
describe('FormControl', () => {
  test('render correctly', () => {
    const component = mountWithTheme(<FormControl></FormControl>)
    const tree = component
    expect(tree).toMatchSnapshot()
  })
})
