import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import {
  Button,
  InputEmail,
  InputText,
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
import { getTotals } from '../reducers/cartSlice'
import LayoutCheckoutForm from '../containers/LayoutCheckoutForm/LayoutCheckoutForm'
import FormControl from '../containers/FormControl/FormControl'
import EmptyCart from '../containers/EmptyCart/EmptyCart'
export default function Cart() {
  const cart = useSelector((state) => state.cart)
  const theme = useTheme()
  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState({})
  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])
  const handleOnChange = (name, value) => {
    setFormValue({ ...formValue, [name]: value })
  }
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault()
    }
    localStorage.setItem('adress', JSON.stringify(formValue))
    Router.push('/payment')
  }
  return (
    <>
      <Head>
        <title>login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="فروشگاه کتاب">
        <Space />
        <Space />
        <Space />
        {cart.cartItems.length == 0 ? (
          <EmptyCart></EmptyCart>
        ) : (
          <>
            <LayoutCheckoutForm>
              <Space />
              <H1 align="center">اطلاعات پستی خود را وارد کنید:</H1>

              <Space />

              <form onSubmit={handleSubmit}>
                <div
                  css={css`
                    width: 50%;
                    padding: 3%;
                    @media (max-width: 1000px) {
                      font-size: 13px;
                      width: 75%;
                    }
                    @media (max-width: 600px) {
                      font-size: 13px;
                      width: 100%;
                    }
                  `}
                >
                  {' '}
                  <H3>استان</H3>
                  <FormControl>
                    <InputText
                      onChange={(value) => handleOnChange('استان :', value)}
                      placeholder="استان"
                    />
                  </FormControl>
                  <H3>شهر</H3>
                  <FormControl>
                    <InputText
                      onChange={(value) => handleOnChange('شهر :', value)}
                      placeholder="شهر "
                    />
                  </FormControl>
                  <H3>خیابان اصلی</H3>
                  <FormControl>
                    <InputText
                      onChange={(value) =>
                        handleOnChange('خیابان اصلی :', value)
                      }
                      placeholder="خیابان اصلی "
                    />
                  </FormControl>
                  <H3>خیابان فرعی</H3>
                  <FormControl>
                    <InputText
                      onChange={(value) =>
                        handleOnChange('خیابان فرعی:', value)
                      }
                      placeholder="خیابان فرعی "
                    />
                  </FormControl>
                  <H3>کوچه</H3>
                  <FormControl>
                    <InputText
                      onChange={(value) => handleOnChange('کوچه :', value)}
                      placeholder=" کوچه "
                    />
                  </FormControl>
                  <H3>پلاک</H3>
                  <FormControl>
                    <InputText
                      onChange={(value) => handleOnChange('پلاک :', value)}
                      placeholder=" پلاک "
                    />
                  </FormControl>
                  <H3>طبقه</H3>
                  <FormControl>
                    <InputText
                      onChange={(value) => handleOnChange('طبقه :', value)}
                      placeholder=" طبقه "
                    />
                  </FormControl>
                </div>
                <Space />
                <Space />
                <H2>فاکتور:</H2>
                <div
                  css={css`
                    display: flex;
                    background-color: ${theme.colors.blue};
                    color: ${theme.colors.white};
                    justify-content: space-between;
                    align-items: center;
                    align-self: center;
                    padding: 1%;
                    width: 100%;
                    margin: 0 auto;
                    @media (max-width: 1000px) {
                      font-size: 13px;
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
                      width: 100%;
                      margin: 0 auto;
                      border-bottom: 1px solid black;
                      @media (max-width: 1000px) {
                        font-size: 13px;
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
                      ></div>
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
                      <div
                        css={css`
                          margin-top: 25%;
                          @media (max-width: 1000px) {
                          }
                        `}
                      >
                        <H5>{cartItem.cartQuantity}</H5>
                      </div>
                    </div>
                    <H5>{cartItem.price * cartItem.cartQuantity} تومان</H5>
                  </div>
                ))}
                <div
                  css={css`
                    padding: 1%;
                    width: 100%;
                    margin: 0 auto;
                    display: flex;
                  `}
                >
                  <div>
                    <Link href={'/cart'}>
                      <Button danger textWhite>
                        اصلاح سبد خرید
                      </Button>
                    </Link>
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
                        padding: 5%;
                        justify-content: space-between;
                        @media (max-width: 1000px) {
                        }
                      `}
                    >
                      <div
                        css={css`
                     display:flex;
                     
                      }
                    `}
                      >
                        <H5>مجموع خرید: </H5>
                        <H5> {cart.cartTotalAmount}</H5>
                      </div>

                      <div
                        css={css`
                     display:flex;
                      }
                    `}
                      >
                        <H5>مالیات :</H5>
                        <H5> {cart.cartTotalAmount * 0.09}</H5>
                      </div>
                      <div
                        css={css`
                     display:flex;
                      }
                    `}
                      >
                        {' '}
                        <H5>قابل پرداخت:</H5>
                        <H5>
                          {' '}
                          {cart.cartTotalAmount + 0.09 * cart.cartTotalAmount}
                        </H5>
                      </div>
                    </div>
                    <FormControl>
                      <Button blue textWhite type="submit">
                        پرداخت
                      </Button>
                    </FormControl>
                  </div>
                </div>
              </form>
            </LayoutCheckoutForm>
          </>
        )}
      </Layout>
    </>
  )
}
