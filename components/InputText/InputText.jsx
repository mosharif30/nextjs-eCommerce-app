/* eslint-disable react/prop-types */
import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

function InputText(props) {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <Input type="text" {...props} />
    </div>
  )
}

export default InputText
