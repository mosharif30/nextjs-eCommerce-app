/* eslint-disable react/prop-types */
import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

function InputText({ placeholder }) {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <Input type="text" placeholder={placeholder} />
    </div>
  )
}

export default InputText
