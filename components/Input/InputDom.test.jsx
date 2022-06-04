/**
 * @jest-environment jsdom
 */
import Input from './Input'
import { ThemeProvider } from '@emotion/react'
import theme from '../../configs/theme'
import { render, fireEvent } from '@testing-library/react'

describe('Input', () => {
  test('render Input in dom with placeholder', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input placeholder={'sample place holder'}>
          sample Input with placeholder
        </Input>
      </ThemeProvider>
    )
    expect(getByPlaceholderText(/sample/)).toBeTruthy()
  })
  const setup = () => {
    const utils = render(
      <ThemeProvider theme={theme}>
        <Input onChange={jest.fn()} />
      </ThemeProvider>
    )
    const input = utils.getByLabelText('cost-input')
    return {
      input,
      ...utils,
    }
  }
  test('It should keep value of input', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
  })
})
