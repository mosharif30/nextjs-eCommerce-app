import React from 'react'

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

export default function Home() {
  const theme = useTheme()

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
          {data.products.map((product) => (
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
                    max-width: 500px;
                    margin-top: 5px;
                    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
                  `}
                >
                  <img
                    css={css`
                      max-width: 500px;
                      max-height: 500px;
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
                    <H4>
                      <b>{product.name}</b>
                    </H4>
                    <p>{product.author}</p>
                  </div>
                  <div
                    css={css`
                      padding: 4%;
                      background-color: ${theme.colors.primary};
                      display: flex;
                    `}
                  >
                    <span
                      css={css`
                        color: white;
                      `}
                    >
                      {product.price} تومان
                    </span>
                    <Button type="button" css={css``}>
                      اضافه به سبد خرید
                    </Button>
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
