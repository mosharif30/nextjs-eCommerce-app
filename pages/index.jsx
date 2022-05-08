import React from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Head from 'next/head'
import Layout from '../components/Layout'
import data from '../utils/data'

export default function Home() {
  const primary = '#2c3e50'
  return (
    <Layout>
      <div>
        <h1
          css={css`
            margin: 2%;
          `}
        >
          محصولات
        </h1>
        <div
          css={css`
            display: flex;
          `}
        >
          {data.products.map((product) => (
            <div
              css={css`
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                transition: 0.3s;
                width: auto;
                box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
                margin: 2%;
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
          ))}
        </div>
      </div>
    </Layout>
  )
}
