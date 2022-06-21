import React from 'react'
import Link from 'next/link'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Layout from '../../containers/Layout'
import { Button, H1, H3, H5, Space } from '../../components'
import { GET_LIST_BOOK_ACTION } from '../../actions'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../reducers/cartSlice'

const ProductPage = ({ books }) => {
  const primary = '#2c3e50'
  const secondary = '#f39c12'
  const success = '#27ae60'
  const danger = '#c0392b'
  const router = useRouter()
  const { slug } = router.query
  const product = books.find((a) => a.slug === slug)
  if (!product) {
    return <div>not found</div>
  }
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  const myLoader = ({ src, width, quality }) => {
    return `/${product.image}?w=${300}&q=${quality || 75}`
  }
  return (
    <Layout title={product.name}>
      <Space />
      <Space />

      <div
        css={css`
          width: 20%;
          @media (max-width: 850px) {
            width: 40%;
          }
          @media (max-width: 500px) {
            width: 100%;
          }
        `}
      ></div>

      <div
        css={css`
          display: flex;
          flex-direction: row;
          margin-right: 20px;

          @media (max-width: 750px) {
            flex-direction: column;
            margin-right: 0;
          }
        `}
      >
        <div
          css={css`
            width: 30%;
            @media (max-width: 750px) {
              width: 50%;
              display: flex;
              margin-right: auto;
              margin-left: auto;
            }
          `}
        >
          <Image
            loader={myLoader}
            src={`/${product.image}`}
            alt={product.name}
            width={250}
            height={350}
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
          <H1>{product.name}</H1>
          <H5>نویسنده:{product.author}</H5>
          <H5>مترجم:{product.translate}</H5>
          <H5>دسته بندی:{product.category}</H5>
          <H5>انتشارات:{product.brand}</H5>
          <H5>توضیحات : {product.description}</H5>
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
              box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
              transition: 0.3s;
              width: 80%;
              @media (max-width: 750px) {
                width: 90%;
                margin-right: auto;
                margin-left: auto;
                padding: 2%;
              }
            `}
          >
            <div
              css={css`
                padding: 5% 10%;
              `}
            >
              <H5>قیمت : {product.price} تومان</H5>
            </div>
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
            <Link href={'/cart'}>
              <Button
                onClick={() => handleAddToCart(product)}
                secondary
                textWhite
                type="button"
              >
                اضافه به سبد خرید
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
ProductPage.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(GET_LIST_BOOK_ACTION())
  const { book } = reduxStore.getState()
  return {
    books: book.books,
  }
}

export default ProductPage
