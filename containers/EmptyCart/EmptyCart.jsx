/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Link from 'next/link'
import { Button } from '../../components'
const EmptyCart = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        @media (max-width: 1000px) {
        }
      `}
    >
      <div
        css={css`
          margin: 0 auto;
        `}
      >
        سبد خرید خالیست
      </div>
      <div
        css={css`
          width: 50%;
          margin: 0 auto;
          margin-top: 5%;
        `}
      >
        {' '}
        <Link href="/">
          <Button>صفحه اصلی</Button>
        </Link>
      </div>
    </div>
  )
}
export default EmptyCart
