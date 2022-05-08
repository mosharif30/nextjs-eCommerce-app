import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

function Header() {
  const primary = '#2c3e50'
  return (
    <div>
      <navbar
        css={css`
          display: flex;
          background-color: ${primary};
          font-size: 24px;
          width: 100%;
          padding: 2%;
        `}
      >
        <span
          css={css`
            color: white;
          `}
        >
          فروشگاه اینترنتی نکست جی اس
        </span>
      </navbar>
    </div>
  )
}

export default Header
