import React from 'react'

/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

function Button({ type = 'button', children, secondary, sec, textWhite }) {
  const theme = useTheme()
  return (
    <button
      type={type}
      css={css`
        width: 100%;
        background-color: ${secondary
          ? theme.colors.secondary
          : sec
          ? theme.colors.sec
          : theme.colors.primary};
        color: ${textWhite ? theme.colors.white : theme.colors.text};
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
          background-color: ${theme.colors.secondary};
        }
      `}
    >
      {children}
    </button>
  )
}

export default Button
