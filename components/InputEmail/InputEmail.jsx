/* eslint-disable react/prop-types */
import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

function InputEmail({ placeholder }) {
  return (
    <div
      css={css`
        width: 100%;
        direction: ltr;
      `}
    >
      <Input type="email" placeholder={placeholder} />
    </div>
  )
}

export default InputEmail
