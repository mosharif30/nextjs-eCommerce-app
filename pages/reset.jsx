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

export default function Reset() {
  const [formValue, setFormValue] = useState({})
  const handleOnChange = (name, value) => {
    setFormValue({ ...formValue, [name]: value })
  }
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
    }
    console.log('submit', formValue)
  }
  return (
    <div>
      <Head>
        <title>reset</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="فروشگاه کتاب">
        <LayoutAuth>
          <Space />
          <H1 align="center">تعویض رمز</H1>

          <Space />

          <form onSubmit={handleSubmit}>
            <FormControl>
              <InputPassword
                onChange={(value) => handleOnChange('password', value)}
                placeholder="کلمه عبور"
              />
            </FormControl>
            <FormControl>
              <InputPassword
                onChange={(value) => handleOnChange('repeatpassword', value)}
                placeholder="تکرار کلمه عبور "
              />
            </FormControl>
            <FormControl>
              <Button type="submit"> تعویض </Button>
            </FormControl>
          </form>
        </LayoutAuth>
      </Layout>
    </div>
  )
}
