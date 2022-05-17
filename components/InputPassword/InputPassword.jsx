import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

function InputPassword(props) {
  return (
    <div
      css={css`
        width: 100%;
        direction: ltr;
      `}
    >
      <Input type="password" {...props} />
    </div>
  )
}

export default InputPassword
