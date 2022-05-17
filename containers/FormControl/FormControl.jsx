import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@emotion/react'

function FormControl({ children }) {
  const theme = useTheme()
  return (
    <div
      css={css`
        display: flex;
        padding: ${theme.spaces[3]};
      `}
    >
      {children}
    </div>
  )
}

export default FormControl
