import React from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Layout from '../../components/Layout'

export default function Contact() {
  return (
    <Layout title="ارتباط با ما">
      <h1
        css={css`
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          width: 300px;

          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        `}
      >
        ارتباط با ما
      </h1>
    </Layout>
  )
}
