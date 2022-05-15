/* eslint-disable react/prop-types */
import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@emotion/react'

function Button({ type = 'button', children, secondary }) {
  const theme = useTheme()
  return (
    <button
      type={type}
      css={css`
        width: 100%;
        background-color: ${secondary
          ? theme.colors.secondary
          : theme.colors.primary};
        color: white;
        font-size: ${theme.typography.paragraph.fontSize};
        text-decoration: none;
        padding: ${theme.spaces[4]};
        border: ${theme.borderRadius[1]};
        display: inline-block;
        position: relative;
        cursor: pointer;
        transition-duration: 0.4s;
        &:hover {
          box-shadow: ${theme.boxShadow.light};
        }
      `}
    >
      {children}
    </button>
  )
}

export default Button
