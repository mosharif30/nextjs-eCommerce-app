import { ThemeProvider } from '@emotion/react'
import theme from '../configs/theme'
import renderer from 'react-test-renderer'

const mountWithTheme = (children) => {
  return renderer.create(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}
export default mountWithTheme
