import React from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>محصولات</h1>
        <ul>
          <li>محصول 1</li>
          <li>محصول 2</li>
          <li>محصول 3</li>
        </ul>
      </div>
    </Layout>
  )
}
