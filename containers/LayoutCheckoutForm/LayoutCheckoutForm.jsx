import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

function LayoutCheckoutForm({ children }) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;

        justify-content: center;
        flex-direction: column;
      `}
    >
      <div>
        <img
          css={css`
            width: 300px;
          `}
          src="checkout.jpg"
          alt="logo"
        />
      </div>

      <div
        css={css`
          width: 60%;
          @media (max-width: 1100px) {
            width: 80%;
          }
          @media (max-width: 700px) {
            width: 100%;
          }
        `}
      >
        {children}
      </div>
    </div>
  )
}

export default LayoutCheckoutForm
