/**
 * @jest-environment jsdom
 */
import InputPassword from './InputPassword'
import { ThemeProvider } from '@emotion/react'
import theme from '../../configs/theme'
import { render, fireEvent } from '@testing-library/react'

describe('InputPassword', () => {
  test('render InputPassword in dom with placeholder', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <InputPassword placeholder={'sample place holder'}>
          sample Input with placeholder
        </InputPassword>
      </ThemeProvider>
    )
    expect(getByPlaceholderText(/sample/)).toBeTruthy()
  })
  const setup = () => {
    const utils = render(
      <ThemeProvider theme={theme}>
        <InputPassword onChange={jest.fn()} />
      </ThemeProvider>
    )
    const input = utils.getByLabelText('input')
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
