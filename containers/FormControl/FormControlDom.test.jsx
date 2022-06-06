/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FormControl from './FormControl'
import { ThemeProvider } from '@emotion/react'
import theme from '../../configs/theme'
describe('FormControl', () => {
  test('render children correctly', async () => {
    render(
      <ThemeProvider theme={theme}>
        <FormControl>some sample children</FormControl>
      </ThemeProvider>
    )
    const children = screen.getByText(/some sample children/i)
    expect(children).toBeInTheDocument()
  })
})
