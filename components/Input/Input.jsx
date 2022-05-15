/* eslint-disable react/prop-types */
import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@emotion/react'

function Input({ type = 'text', placeholder }) {
  const theme = useTheme()
  // console.log(theme.typography.h1)
  return (
    <input
      type={type}
      placeholder={placeholder}
      css={css`
        width: 100%;
        border: ${theme.border[1]} solid ${theme.borderColor.light};
        background-color: ${theme.inputColor.light};
        margin: ${theme.spaces[0]};
        outline: ${theme.spaces[0]};
        font-size: ${theme.typography.paragraph.fontSize};
        color: ${theme.colors.text};
        padding: ${theme.spaces[3]};
        &:focus {
          border: ${theme.border[1]} solid ${theme.colors.primary};
        }
      `}
    />
  )
}

export default Input
