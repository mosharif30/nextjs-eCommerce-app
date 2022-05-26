import React, { useEffect } from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import Link from 'next/link'
import Layout from '../containers/Layout'
import data from '../utils/data'
import {
  Button,
  InputEmail,
  InputPassword,
  H1,
  Space,
  H2,
  H3,
  H4,
  H5,
  Small,
} from '../components'
import { GET_LIST_BOOK_ACTION } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const theme = useTheme()
  const dispatch = useDispatch()
  const { loading, books } = useSelector((state) => state.book)

  useEffect(() => {
    dispatch(GET_LIST_BOOK_ACTION())
  }, [])
  return (
    <Layout title="فروشگاه کتاب">
      <div>
        <H1
          css={css`
            margin: 2%;
          `}
        >
          محصولات
        </H1>
        <div
          className="parent"
          css={css`
            display: flex;
            margin-right: 3%;
            @media (max-width: 1740px) {
              flex-wrap: wrap;
              justify-content: center;
            }
            @media (max-width: 706px) {
              flex-direction: column;
              align-items: center;
            }
          `}
        >
          {loading && <></>}
          {!loading &&
            books &&
            books.map((product) => (
              <Link href={`/product/${product.slug}`}>
                <a
                  css={css`
                    margin-right: 2%;
                    @media (max-width: 706px) {
                      margin-top: 3%;
                    }
                  `}
                  href={`/product/${product.slug}`}
                >
                  {' '}
                  <div
                    css={css`
                      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                      transition: 0.3s;
                      max-width: 250px;
                      margin-top: 5px;
                      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
                    `}
                  >
                    <img
                      css={css`
                        max-width: 300px;
                        max-height: 300px;
                      `}
                      src={product.image}
                      alt=""
                      srcSet=""
                    />
                    <div
                      css={css`
                        padding: 2px 16px;
                      `}
                    >
                      {' '}
                      <H5>{product.name}</H5>
                      <Small
                        css={css`
                          color: ${theme.colors.text};
                        `}
                      >
                        {product.author}
                      </Small>
                    </div>

                    <div
                      css={css`
                        width: 100%;
                        padding: 10%;
                        background-color: ${theme.colors.primary};
                        display: flex;
                        justify-content: center;
                      `}
                    >
                      <H5>{product.price} هزارتومان</H5>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
        </div>
      </div>
    </Layout>
  )
}
