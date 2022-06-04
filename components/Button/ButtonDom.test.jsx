/**
 * @jest-environment jsdom
 */
import Button from './Button'
import { ThemeProvider } from '@emotion/react'
import theme from '../../configs/theme'
import { render, fireEvent } from '@testing-library/react'

describe('Input', () => {
  test('render Button in dom ', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>sample button</Button>
      </ThemeProvider>
    )
    expect(getByText(/sample button/)).toBeTruthy()
  })
  test('render Button loading in dom ', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button loading>sample button</Button>
      </ThemeProvider>
    )
    expect(getByText(/صبر/)).toBeTruthy()
  })
  test('onclick ', () => {
    let variable = 0
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button
          onClick={() => {
            variable += 1
          }}
        >
          sample button
        </Button>
      </ThemeProvider>
    )
    fireEvent.click(getByText(/sample button/))
    expect(variable).toBe(1)
  })
})
