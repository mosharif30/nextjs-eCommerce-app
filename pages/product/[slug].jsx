import React from 'react'
import Link from 'next/link'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Layout from '../../components/Layout'
import data from '../../utils/data'

export default function Home() {
  const primary = '#2c3e50'
  const secondary = '#f39c12'
  const success = '#27ae60'
  const danger = '#c0392b'
  const router = useRouter()
  const { slug } = router.query
  const product = data.products.find((a) => a.slug === slug)
  if (!product) {
    return <div>not found</div>
  }
  return (
    <Layout title={product.name}>
      <Link href="/">
        <button
          type="button"
          css={css`
            width: 20%;
            background-color: ${primary};
            border: 0;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 50px;
            margin-right: 20px;
            font-size: 20px;
            cursor: pointer;
            @media (max-width: 600px) {
              width: 80%;
              display: flex;
              justify-content: center;
              margin-right: auto;
              margin-left: auto;
            }
          `}
        >
          بازگشت
        </button>
      </Link>{' '}
      <div
        css={css`
          display: flex;
          flex-direction: row;
          margin-top: 40px;
          margin-right: 20px;

          @media (max-width: 750px) {
            display: flex;
            flex-direction: column;
            margin-right: 0;
          }
        `}
      >
        <div
          css={css`
            width: 20%;
            @media (max-width: 750px) {
              width: 80%;
              display: flex;
              margin-right: auto;
              margin-left: auto;
            }
          `}
        >
          {' '}
          <Image
            src={`/${product.image}`}
            alt={product.name}
            width={500}
            height={700}
          />
        </div>

        <div
          css={css`
            padding: 2px 16px;
            width: 60%;
            @media (max-width: 710px) {
              width: 100%;
            }
          `}
        >
          {' '}
          <h1>{product.name}</h1>
          <h3>نویسنده:{product.author}</h3>
          <h3>مترجم:{product.translate}</h3>
          <h3>دسته بندی:{product.category}</h3>
          <h3>انتشارات:{product.brand}</h3>
          <h3>توضیحات : {product.description}</h3>
        </div>
        <div
          css={css`
            width: 20%;
            @media (max-width: 750px) {
              width: 100%;
            }
          `}
        >
          <div
            css={css`
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              transition: 0.3s;
              width: 80%;
              box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
              @media (max-width: 750px) {
                width: 100%;
              }
            `}
          >
            <h3
              css={css`
                text-align: center;
              `}
            >
              قیمت : {product.price} تومان
            </h3>
            {product.countInStock === 0 ? (
              <div
                css={css`
                  text-align: center;
                  color: ${danger};
                `}
              >
                ناموجود
              </div>
            ) : (
              <div
                css={css`
                  text-align: center;
                  color: ${success};
                `}
              >
                موجود
              </div>
            )}
            <button
              disabled
              type="button"
              css={css`
                background-color: ${secondary};

                width: 100%;
                border: 0;
                color: white;
                text-align: center;
                padding: 50px;
                font-size: 20px;
                cursor: pointer;
              `}
            >
              اضافه به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
