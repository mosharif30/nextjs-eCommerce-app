import React, { useEffect } from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import Layout from '../containers/Layout'
import { H1 } from '../components'
import { GET_LIST_BOOK_ACTION } from '../actions'
import BookCart from '../containers/bookcard'
import book from '../reducers/book'
import { getTotals } from '../reducers/cartSlice'

const Home = ({ books, loading }) => {
  const theme = useTheme()

  return (
    <Layout title="فروشگاه کتاب">
      <div>
        <H1
          css={css`
            margin: 2%;
          `}
        >
          محصولات
        </H1>
        <div
          className="parent"
          css={css`
            display: flex;
            margin-right: 3%;
            @media (max-width: 1740px) {
              flex-wrap: wrap;
              justify-content: center;
            }
            @media (max-width: 706px) {
              flex-direction: column;
              align-items: center;
            }
          `}
        >
          <BookCart loading={loading} books={books}></BookCart>
        </div>
      </div>
    </Layout>
  )
}
Home.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(GET_LIST_BOOK_ACTION())
  await reduxStore.dispatch(getTotals())
  const { book } = reduxStore.getState()
  return {
    loading: book.loading,
    books: book.books,
  }
}
export default Home
