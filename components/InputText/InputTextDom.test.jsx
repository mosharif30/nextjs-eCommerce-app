/**
 * @jest-environment jsdom
 */
import InputText from './InputText'
import { ThemeProvider } from '@emotion/react'
import theme from '../../configs/theme'
import { render, fireEvent } from '@testing-library/react'

describe('InputText', () => {
  test('render InputText in dom with placeholder', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <InputText placeholder={'sample place holder'}>
          sample Input with placeholder
        </InputText>
      </ThemeProvider>
    )
    expect(getByPlaceholderText(/sample/)).toBeTruthy()
  })
  const setup = () => {
    const utils = render(
      <ThemeProvider theme={theme}>
        <InputText onChange={jest.fn()} />
      </ThemeProvider>
    )
    const input = utils.getByLabelText('input')
    return {
      input,
      ...utils,
    }
  }
  test('It should keep value of inputText', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
  })
})
