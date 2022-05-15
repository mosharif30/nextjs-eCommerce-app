// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }
// .storybook/preview.js

import React from 'react'

import { ThemeProvider } from '@emotion/react'
import theme from '../configs/theme'
import Reset from '../containers/Reset/Reset'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div
        css={css`
          font-family: 'Vazir';
        `}
      >
        <Reset />
        <Story />
      </div>
    </ThemeProvider>
  ),
]
