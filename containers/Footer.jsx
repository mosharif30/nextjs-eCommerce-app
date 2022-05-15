import React from 'react'

/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

function Footer() {
  const theme = useTheme()

  return (
    <div>
      <navbar
        css={css`
          display: flex;
          background-color: ${theme.colors.primary};
          font-size: 24px;
          width: 100%;
          padding: 2%;
          justify-content: center;
          @media (max-width: 430px) {
            font-size: 18px;
          }
        `}
      >
        <span
          css={css`
            color: white;
          `}
        >
          ساخته شده توسط محمدرضا شریف خانی
        </span>
      </navbar>
    </div>
  )
}

export default Footer
