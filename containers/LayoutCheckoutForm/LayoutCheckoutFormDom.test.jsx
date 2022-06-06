/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LayoutCheckoutForm from './LayoutCheckoutForm'
import { ThemeProvider } from '@emotion/react'
import theme from '../../configs/theme'
describe('LayoutCheckoutForm', () => {
  test('render children correctly', async () => {
    render(
      <ThemeProvider theme={theme}>
        <LayoutCheckoutForm>some sample children</LayoutCheckoutForm>
      </ThemeProvider>
    )
    const children = screen.getByText(/some sample children/i)
    expect(children).toBeInTheDocument()
  })
})
