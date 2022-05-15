import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@emotion/react'
import Button from './Button'

export default { title: 'Button' }
export const primary = () => <Button> کلیک کنید</Button>
export const secondary = () => <Button secondary>قرمز</Button>
