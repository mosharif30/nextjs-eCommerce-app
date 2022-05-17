import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@emotion/react'
import InputText from '../InputText/InputText'
import InputEmail from '../InputEmail/InputEmail'
import InputPassword from '../InputPassword/InputPassword'
import { Space } from '../Typography'
export default { title: 'Input' }
export const Input = () => (
  <div
    css={css`
      width: 30%;
      margin: 0 auto;
      direction: rtl;
    `}
  >
    <InputText placeholder="نام خود را وارد کنید" />
    <Space />
    <InputEmail placeholder="Email" />
    <Space />
    <InputPassword placeholder="پسورد" />
  </div>
)
