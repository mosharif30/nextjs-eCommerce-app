import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

function LayoutAuth({ children }) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        height: 100vh;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <div>
        <img
          css={css`
            width: 300px;
          `}
          src="nextl.png"
          alt="logo"
        />
      </div>

      <div
        css={css`
          width: 35%;
          @media (max-width: 1100px) {
            width: 60%;
          }
          @media (max-width: 700px) {
            width: 90%;
          }
        `}
      >
        {children}
      </div>
    </div>
  )
}

export default LayoutAuth
