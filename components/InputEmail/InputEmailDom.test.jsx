/**
 * @jest-environment jsdom
 */
import InputEmail from './InputEmail'
import { ThemeProvider } from '@emotion/react'
import theme from '../../configs/theme'
import { render, fireEvent } from '@testing-library/react'

describe('Input', () => {
  test('render Input in dom with placeholder', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <InputEmail placeholder={'sample place holder'}>
          sample InputEmail with placeholder
        </InputEmail>
      </ThemeProvider>
    )
    expect(getByPlaceholderText(/sample/)).toBeTruthy()
  })
  const setup = () => {
    const utils = render(
      <ThemeProvider theme={theme}>
        <InputEmail onChange={jest.fn()} />
      </ThemeProvider>
    )
    const input = utils.getByLabelText('input')
    return {
      input,
      ...utils,
    }
  }
  test('It should keep value of inputEmail', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'test@test.com' } })
    expect(input.value).toBe('test@test.com')
  })
})
