import React from 'react'
import { ThemeProvider } from '@emotion/react'
import '../styles/globals.css'
import theme from '../configs/theme'

import { Provider } from 'react-redux'
import store from '../configs/store'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
