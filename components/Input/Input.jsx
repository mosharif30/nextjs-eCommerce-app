import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@emotion/react'

function Input({ type = 'text', placeholder, onChange }) {
  const theme = useTheme()
  const handleOnChange = (event) => {
    onChange(event.target.value)
  }
  return (
    <input
      onChange={handleOnChange}
      type={type}
      placeholder={placeholder}
      css={css`
        width: 100%;
        word-break: break-word;
        border: ${theme.border[1]} solid ${theme.borderColor.light};
        background-color: ${theme.inputColor.light};
        margin: ${theme.spaces[0]};
        outline: ${theme.spaces[0]};
        font-size: ${theme.typography.paragraph.fontSize};
        color: ${theme.colors.text};
        padding: ${theme.spaces[0]};
        height: ${theme.spaces[5]};
        &:focus {
          border: ${theme.border[1]} solid ${theme.colors.primary};
        }
      `}
    />
  )
}

export default Input
