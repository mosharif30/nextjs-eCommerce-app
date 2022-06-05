import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import '../styles/globals.css'
import theme from '../configs/theme'
import { Provider } from 'react-redux'
import { store, persistedStore } from '../configs/store'
import App from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PersistGate } from 'redux-persist/integration/react'
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
        <PersistGate loading={null} persistor={persistedStore}>
          <ThemeProvider theme={theme}>
            <ToastContainer />
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
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
