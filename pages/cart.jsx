import React, { useEffect, useState } from 'react'

//this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import Head from 'next/head'
import Link from 'next/link'
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
import Layout from '../containers/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { castDraft, produceWithPatches } from 'immer'
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from '../reducers/cartSlice'
export default function Cart() {
  const cart = useSelector((state) => state.cart)
  const theme = useTheme()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }
  const handledecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  const handleClearCart = (product) => {
    dispatch(clearCart())
  }

  return (
    <>
      <Head>
        <title>login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="فروشگاه کتاب">
        <H2>سبد خرید</H2>
        {cart.cartItems.length == 0 ? (
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin: 0 auto;

              @media (max-width: 1000px) {
              }
            `}
          >
            <div
              css={css`
                margin: 0 auto;
              `}
            >
              سبد خرید خالیست
            </div>
            <div
              css={css`
                width: 50%;
                margin: 0 auto;
                margin-top: 5%;
              `}
            >
              {' '}
              <Link href="/">
                <Button>صفحه اصلی</Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div
              css={css`
                display: flex;
                background-color: ${theme.colors.secondary};
                color: ${theme.colors.white};
                justify-content: space-between;
                align-items: center;
                align-self: center;
                padding: 1%;
                width: 70%;
                margin: 0 auto;

                @media (max-width: 1000px) {
                  font-size: 13px;
                  width: 100%;
                }
              `}
            >
              <div>
                <H5>تصویر</H5>
              </div>
              <H5>نام</H5>
              <H5>قیمت</H5>
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                  align-content: center;

                  max-width: 50px;
                  max-height: 50px;
                  @media (max-width: 550px) {
                  }
                `}
              >
                <div
                  css={css`
                    margin-top: 25%;
                    @media (max-width: 1000px) {
                    }
                  `}
                >
                  <H5>تعداد</H5>
                </div>
              </div>
              <H5>مجموع </H5>
            </div>

            {cart.cartItems.map((cartItem) => (
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  align-self: center;
                  padding: 1%;
                  width: 70%;
                  margin: 0 auto;
                  border-bottom: 1px solid black;
                  @media (max-width: 1000px) {
                    font-size: 13px;
                    width: 100%;
                  }
                `}
                key={cartItem.id}
              >
                <div>
                  <img
                    css={css`
                      max-width: 150px;
                      max-height: 150px;
                      @media (max-width: 1000px) {
                        max-width: 80px;
                        max-height: 80px;
                      }
                    `}
                    src={cartItem.image}
                    alt=""
                    srcSet=""
                  />
                  <div
                    css={css`
                      margin-bottom: auto;
                      margin-top: auto;
                      @media (max-width: 900px) {
                        width: 80px;
                        height: 60px;
                      }
                    `}
                  >
                    <Button
                      onClick={() => handleRemoveFromCart(cartItem)}
                      danger
                      textWhite
                    >
                      حذف
                    </Button>
                  </div>
                </div>
                <H5>{cartItem.name}</H5>

                <H5>{cartItem.price} تومان</H5>
                <div
                  css={css`
                    display: flex;
                    justify-content: center;
                    align-content: center;

                    max-width: 50px;
                    max-height: 50px;
                    @media (max-width: 550px) {
                    }
                  `}
                >
                  <Button onClick={() => handleAddToCart(cartItem)} bgWhite>
                    +
                  </Button>
                  <div
                    css={css`
                      margin-top: 25%;
                      @media (max-width: 1000px) {
                      }
                    `}
                  >
                    <H5>{cartItem.cartQuantity}</H5>
                  </div>
                  <Button
                    onClick={() => handledecreaseCart(cartItem)}
                    bgWhite
                    danger
                  >
                    -
                  </Button>
                </div>
                <H5>{cartItem.price * cartItem.cartQuantity} تومان</H5>
              </div>
            ))}
            <div
              css={css`
                padding: 1%;
                width: 70%;
                margin: 0 auto;
                display: flex;
                @media (max-width: 1000px) {
                  width: 100%;
                }
              `}
            >
              <div>
                <Button onClick={() => handleClearCart()} danger textWhite>
                  پاک کردن سبد خرید
                </Button>
              </div>
              <div
                css={css`
                  width: 40%;
                  margin-right: auto;

                  @media (max-width: 500px) {
                    width: 100%;
                  }
                `}
              >
                <div
                  css={css`
                    display: flex;
                    padding: 5%;
                    justify-content: space-between;
                    @media (max-width: 1000px) {
                    }
                  `}
                >
                  <H5>مجموع:</H5>
                  <H5> {cart.cartTotalAmount}</H5>
                </div>
                <Small>هزینه ارسال و مالیات در مرحله بعد محاسبه می شود</Small>
                <Link href={'/checkout'}>
                  <Button secondary textWhite>
                    مرحله بعد
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  )
}
