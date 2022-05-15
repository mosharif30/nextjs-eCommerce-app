import React from 'react'
import Link from 'next/link'
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

function Header() {
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
          overflow: hidden;
          @media (max-width: 1082px) {
            font-size: 20px;
          }
          @media (max-width: 706px) {
            flex-direction: column;
            align-items: center;
          }
        `}
      >
        <span
          css={css`
            color: white;
          `}
        >
          فروشگاه اینترنتی نکست
        </span>
        <ul
          css={css`
            display: flex;
            list-style-type: none;
            color: white;
            margin: 0;
            width: 50%;
            @media (max-width: 706px) {
              flex-direction: column;
              margin-top: 5%;
              align-items: center;
              padding-right: 0;
            }
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
            @media (max-width: 1082px) {
              font-size: 20px;
              padding: 2px;
            }
            @media (max-width: 706px) {
              flex-direction: row;
              justify-content: space-between;
              width: 100%;
            }
          `}
        >
          <li
            css={css`
              padding-right: 5%;
              margin-right: auto;
              @media (max-width: 706px) {
                margin-right: 0;
                padding-right: 0;
              }
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
            <Link href="/login">ورود</Link>
          </li>
        </ul>
      </navbar>
    </div>
  )
}

export default Header
