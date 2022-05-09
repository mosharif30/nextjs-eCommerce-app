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
  const router = useRouter()
  const { slug } = router.query
  const product = data.products.find((a) => a.slug === slug)
  if (!product) {
    return <div>not found</div>
  }
  return (
    <Layout title={product.name}>
      {' '}
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
        `}
      >
        <Link href="/"> بازگشت</Link>{' '}
      </button>
      <div
        css={css`
          display: flex;
          margin-top: 40px;
          margin-right: 20px;
        `}
      >
        <div
          css={css`
            width: 20%;
          `}
        >
          {' '}
          <Image
            src={`/${product.image}`}
            alt={product.name}
            width={350}
            height={500}
          />
        </div>

        <div
          css={css`
            padding: 2px 16px;
            width: 60%;
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
          `}
        >
          <div
            css={css`
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              transition: 0.3s;
              width: 80%;
              box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
            `}
          >
            <h3
              css={css`
                text-align: center;
              `}
            >
              قیمت : {product.price} تومان
            </h3>
            <button
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
