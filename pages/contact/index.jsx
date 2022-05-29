import React, { useState } from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Layout from '../../containers/Layout'
import {
  Button,
  H1,
  InputEmail,
  InputText,
  InputTextArea,
  Space,
} from '../../components'
import FormControl from '../../containers/FormControl/FormControl'

export default function Contact() {
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
    <Layout title="ارتباط با ما">
      <div
        css={css`
          width: 100%;
          padding: 5%;
        `}
      >
        <div
          css={css`
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            width: 50%;
            padding: 5%;
            margin: 0 auto;
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
            @media (max-width: 1000px) {
              width: 80%;
            }
            @media (max-width: 706px) {
              width: 100%;
            }
          `}
        >
          <H1>ارتباط با ما</H1>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <InputText
                onChange={(value) => handleOnChange('myname', value)}
                placeholder="نام"
              />
            </FormControl>
            <FormControl>
              <InputEmail
                onChange={(value) => handleOnChange('email', value)}
                placeholder="Email"
              />
            </FormControl>
            <FormControl>
              <InputText
                onChange={(value) => handleOnChange('message', value)}
                placeholder="متن"
              />
            </FormControl>
            <FormControl>
              <Button sec textWhite type="submit">
                ثبت
              </Button>
            </FormControl>
          </form>
        </div>
        <Space />
        <Space />
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
    </Layout>
  )
}
