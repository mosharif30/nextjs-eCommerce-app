import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@emotion/react'
import Button from './Button'
export default { title: 'Button' }
export const primary = () => (
  <div
    css={css`
      width: 30%;
      margin: 0 auto;
    `}
  >
    <Button> کلیک کنید</Button>
  </div>
)
export const secondary = () => (
  <div
    css={css`
      width: 30%;
      margin: 0 auto;
    `}
  >
    <Button secondary>کلیک کنید</Button>
  </div>
)
export const lightgreen = () => (
  <div
    css={css`
      width: 30%;
      margin: 0 auto;
    `}
  >
    <Button sec textWhite>
      کلیک کنید
    </Button>
  </div>
)
