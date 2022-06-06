/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LayoutAuth from './LayoutAuth'
import { ThemeProvider } from '@emotion/react'
import theme from '../../configs/theme'
describe('LayoutAuth', () => {
  test('render children correctly', async () => {
    render(
      <ThemeProvider theme={theme}>
        <LayoutAuth>some sample children</LayoutAuth>
      </ThemeProvider>
    )
    const children = screen.getByText(/some sample children/i)
    expect(children).toBeInTheDocument()
  })
})
