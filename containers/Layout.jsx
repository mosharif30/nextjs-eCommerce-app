/* eslint-disable react/prop-types */
import React from 'react'

import Head from 'next/head'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header>{children}</Header>
      <main
        css={css`
          height: auto;
          margin-bottom: 5%;
        `}
      >
        {children}
      </main>
      <Footer>{children}</Footer>
    </div>
  )
}

export default Layout
