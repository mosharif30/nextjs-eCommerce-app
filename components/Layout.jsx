/* eslint-disable react/prop-types */
import React from 'react'

import Head from 'next/head'
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react'
import Header from './Header'
import Footer from './footer'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>فروشگاه اینترنتی نکست</title>
      </Head>
      <Header>{children}</Header>
      <main>{children}</main>
      <Footer>{children}</Footer>
    </div>
  )
}

export default Layout
