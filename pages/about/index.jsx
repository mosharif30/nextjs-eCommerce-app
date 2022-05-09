import React from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Layout from '../../components/Layout'

export default function About() {
  return (
    <Layout title="درباره ما">
      <h1
        css={css`
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          width: 300px;

          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        `}
      >
        درباره ما
      </h1>
    </Layout>
  )
}
