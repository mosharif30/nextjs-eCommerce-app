/* eslint-disable react/prop-types */
import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@emotion/react'

function H4({ children, align = 'right' }) {
  const theme = useTheme()
  return (
    <h1
      css={css`
        margin: 3rem 0 1.38rem;
        text-align: ${align};
        font-weight: ${theme.typography.h4.fontWeight};
        line-height: ${theme.typography.h4.lineHeight};
        margin-top: 0;
        font-size: ${theme.typography.h4.fontSize}em;
      `}
    >
      {children}
    </h1>
  )
}

export default H4
