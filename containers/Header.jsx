import React from 'react'
import Link from 'next/link'
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { useSelector } from 'react-redux'

function Header() {
  const auth = useSelector((state) => state.auth)

  const theme = useTheme()

  return (
    <div>
      <div
        css={css`
          display: flex;
          padding: 1%;
          background-color: ${theme.colors.primary};

          @media (max-width: 706px) {
            flex-direction: column;
            align-items: center;
          }
        `}
      >
        <div
          css={css`
            display: flex;

            color: ${theme.colors.text};
            width: 25%;
            align-items: center;
            justify-content: center;
            @media (max-width: 706px) {
              width: 100%;
              justify-content: center;
            }
          `}
        >
          <img
            css={css`
              width: 120px;
            `}
            src="/nextl.png"
            alt="logo"
          />{' '}
        </div>
        <ul
          css={css`
            display: flex;
            list-style-type: none;
            color: ${theme.colors.text};
            width: 40%;
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
              display: flex;

              align-items: center;
              justify-content: center;
            `}
          >
            <Link href="/">خانه</Link>
          </li>
          <li
            css={css`
              display: flex;

              padding-right: 5%;
              align-items: center;
              justify-content: center;
              @media (max-width: 706px) {
                padding-right: 0;
              }
            `}
          >
            <Link href="/about">درباره ما</Link>
          </li>
          <li
            css={css`
              display: flex;

              padding-right: 5%;
              align-items: center;
              justify-content: center;
              @media (max-width: 706px) {
                padding-right: 0;
              }
            `}
          >
            <Link href="/contact">ارتباط با ما</Link>
          </li>
        </ul>
        <ul
          css={css`
            display: flex;
            justify-content: space-between;
            list-style-type: none;
            color: ${theme.colors.text};
            margin-right: auto;
            width: 40%;
            @media (max-width: 1082px) {
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
              display: flex;

              padding-right: 5%;
              align-items: center;
              margin-right: auto;
              margin-left: 5%;
              @media (max-width: 706px) {
                margin-right: 0;
                padding-right: 0;
              }
            `}
          >
            <Link href="/">سبد خرید</Link>
          </li>
          {(!auth || !auth.logged) && (
            <>
              <li
                css={css`
                  display: flex;

                  padding-right: 5%;
                  align-items: center;
                  margin-right: auto;
                  margin-left: 5%;
                `}
              >
                <Link href="/login">ورود</Link>
              </li>
              <li
                css={css`
                  display: flex;

                  padding-right: 5%;
                  align-items: center;
                  padding: 5%;
                  border-radius: 5%;
                  background-color: ${theme.colors.dark};
                  color: white;
                `}
              >
                <Link href="/register">ثبت نام</Link>
              </li>
            </>
          )}
          {auth && auth.logged && (
            <>
              <li
                css={css`
                  display: flex;

                  padding-right: 5%;
                  align-items: center;
                  padding: 5%;
                  border-radius: 5%;
                  background-color: ${theme.colors.secondary};
                  color: white;
                `}
              >
                <div> خوش آمدید </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header
