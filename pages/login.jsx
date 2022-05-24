import React, { useState } from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react'
import Head from 'next/head'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'

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
import FormControl from '../containers/FormControl/FormControl'
import Layout from '../containers/Layout'
import { useDispatch, useSelector } from 'react-redux'
import actionTypes from '../configs/actionTypes'
import { LOGIN_ACTION } from '../actions'

export default function Login() {
  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState({})
  const auth = useSelector((state) => state.auth)
  console.log(auth)
  const handleOnChange = (name, value) => {
    setFormValue({ ...formValue, [name]: value })
  }
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault()
    }
    console.log('submit', formValue)
    dispatch(LOGIN_ACTION())
  }
  return (
    <div>
      <Head>
        <title>login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="فروشگاه کتاب">
        <LayoutAuth>
          <Space />
          <H1 align="center">به این پروژه ریکتی خوش آمدید</H1>

          <Space />

          <form onSubmit={handleSubmit}>
            <FormControl>
              <InputEmail
                onChange={(value) => handleOnChange('email', value)}
                placeholder="ایمیل"
              />
            </FormControl>
            <FormControl>
              <InputPassword
                onChange={(value) => handleOnChange('password', value)}
                placeholder="کلمه عبور"
              />
            </FormControl>
            <FormControl>
              <Button type="submit" loading={auth.loading}>
                وارد شوید
              </Button>
            </FormControl>
          </form>
        </LayoutAuth>
      </Layout>
    </div>
  )
}
