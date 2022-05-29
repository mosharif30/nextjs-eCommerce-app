import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import '../styles/globals.css'
import theme from '../configs/theme'
import { Provider } from 'react-redux'
import store from '../configs/store'
import App from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  if (typeof window === 'undefined') {
    return <></>
  } else {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}

MyApp.getInitialProps = async (appContext) => {
  appContext.ctx.reduxStore = store
  const pageProps = await App.getInitialProps(appContext)
  return {
    ...pageProps,
  }
}
export default MyApp
