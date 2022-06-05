import React, { useEffect } from 'react'
import Link from 'next/link'
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components'
import { getTotals } from '../../reducers/cartSlice'

function Header() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])
  const auth = useSelector((state) => state.auth)

  const theme = useTheme()
  const { cartTotalQuantity } = useSelector((state) => state.cart)
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
            <Link href="/cart">
              <Button nohover>
                <div
                  css={css`
                    display: flex;
                  `}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
                    </svg>
                  </span>
                  <span
                    css={css`
                   background-color:${theme.colors.secondary};
                   padding:20%;
                   color:white;
                  border-radius: 100%;
                    }
                  `}
                  >
                    {cartTotalQuantity}
                  </span>
                </div>
              </Button>
            </Link>
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
