import React from 'react'

/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

function Button({
  type = 'button',
  children,
  secondary,
  sec,
  textWhite,
  loading,
  onClick,
  danger,
  bgWhite,
  nohover,
}) {
  const theme = useTheme()
  return (
    <button
      onClick={onClick}
      type={type}
      css={css`
        width: 100%;
        background-color: ${bgWhite
          ? theme.colors.simpleWhite
          : danger
          ? theme.colors.danger
          : secondary
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
          box-shadow: ${nohover ? theme.colors.primary : theme.boxShadow.light};
          background-color: ${nohover
            ? theme.colors.primary
            : danger
            ? theme.colors.pomegranate
            : theme.colors.secondary};
        }
      `}
    >
      {loading && 'صبر کنید'}
      {!loading && children}
    </button>
  )
}

export default Button
