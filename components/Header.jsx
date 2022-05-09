import React from 'react'
import Link from 'next/link'
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
          overflow: hidden;
        `}
      >
        <span
          css={css`
            color: white;
          `}
        >
          فروشگاه اینترنتی نکست جی اس
        </span>
        <ul
          css={css`
            display: flex;
            list-style-type: none;
            color: white;
            margin: 0;
            width: 50%;
          `}
        >
          <li
            css={css`
              padding-right: 5%;
            `}
          >
            <Link href="/">خانه</Link>
          </li>
          <li
            css={css`
              padding-right: 5%;
            `}
          >
            <Link href="/about">درباره ما</Link>
          </li>
          <li
            css={css`
              padding-right: 5%;
            `}
          >
            <Link href="/contact">ارتباط با ما</Link>
          </li>
        </ul>
        <ul
          css={css`
            display: flex;
            list-style-type: none;
            color: white;
            margin-right: auto;
            margin-top: 0;
            margin-bottom: 0;
            width: 20%;
          `}
        >
          <li
            css={css`
              padding-right: 5%;
              margin-right: auto;
            `}
          >
            <Link href="/">سبد خرید</Link>
          </li>
          <li
            css={css`
              padding-right: 5%;
              margin-right: auto;
            `}
          >
            <Link href="/">ورود</Link>
          </li>
        </ul>
      </navbar>
    </div>
  )
}

export default Header
