import React from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Link from 'next/link'
import Layout from '../components/Layout'
import data from '../utils/data'

export default function Home() {
  const primary = '#2c3e50'
  return (
    <Layout title="فروشگاه کتاب">
      <div>
        <h1
          css={css`
            margin: 2%;
          `}
        >
          محصولات
        </h1>
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
                    width: 300px;

                    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
                  `}
                >
                  <img
                    css={css`
                      max-width: 300px;
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
                    <h4>
                      <b>{product.name}</b>
                    </h4>
                    <p>{product.author}</p>
                  </div>
                  <div
                    css={css`
                      padding: 4%;
                      background-color: ${primary};
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
                    <button
                      type="button"
                      css={css`
                        margin-right: auto;
                        background-color: ${primary};
                        border: 0;
                        color: white;
                      `}
                    >
                      اضافه به سبد خرید
                    </button>
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
