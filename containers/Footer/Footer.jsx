import React from 'react'

/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { Small } from '../../components'

function Footer() {
  const theme = useTheme()

  return (
    <div>
      <div
        css={css`
          background-color: ${theme.colors.dark};
          font-size: 24px;
          width: 100%;
          padding: 2%;
          color: white;

          @media (max-width: 430px) {
            font-size: 18px;
          }
        `}
      >
        <div
          css={css`
            width: 80%;
            display: flex;
            flex-direction: column;
            margin-right: 10%;
          `}
        >
          <Small>ساخته شده توسط محمدرضا شریف خانی</Small>
          <Small>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
          </Small>
        </div>
      </div>
    </div>
  )
}

export default Footer
