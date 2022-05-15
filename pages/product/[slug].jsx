import React from 'react'
import Link from 'next/link'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Layout from '../../containers/Layout'
import data from '../../utils/data'
import { Button, H1, H3 } from '../../components'

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
      <Button>
        <Link href="/">salam</Link>
      </Button>
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
          <H1>{product.name}</H1>
          <H3>نویسنده:{product.author}</H3>
          <H3>مترجم:{product.translate}</H3>
          <H3>دسته بندی:{product.category}</H3>
          <H3>انتشارات:{product.brand}</H3>
          <H3>توضیحات : {product.description}</H3>
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
            <H3>قیمت : {product.price} تومان</H3>
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
            <Button disabled type="button">
              اضافه به سبد خرید
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
