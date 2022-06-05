import reducer, {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
} from './cartSlice'
import { useDispatch, useSelector } from 'react-redux'

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  })
})
test('should handle a book being added to an empty list', () => {
  const previousState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  }
  expect(
    reducer(
      previousState,
      addToCart({
        id: '3',
        name: ' در باب حکمت زندگی ',
        slug: 'The-Wisdom-of-Life',
        category: 'فلسفی',
        image: './images/wisdom.jpg',
        price: '65000',
        brand: 'نیلوفر',
        rating: '5',
        numReviews: '10',
        countInStock: '20',
        author: 'آرتور شوپنهاور ',
        translate: ' محمد مبشری',
        description:
          'ین کتاب در واقع نام قسمت آخر کتابی با عنوان«ملحقات و متممات» است که  فیلسوف بزرگ آلمانی، آرتور شوپنهاور آن را نوشته است. «شوپنهاور مجموعه‌ی ملحقات و متممات را، که در حقیقت حاصل پژوهش‌های فلسفی وی در ایّام جوانی هستند، در سال ۱۸۵۱ به چاپ رساند. این مجموعه به‌گونه‌ای نوشته شده است که درک آن نیاز به آشنایی تخصصی با فلسفه‌ی فیلسوفان گذشته ندارد و همین امر باعث شده تا افراد نسبتاً زیادی این مجموعه را مطالعه نمایند.»این ویژگی در کتاب منجر شده است تا این نوشته به یکی از پرخواننده‌ترین  نو.شته های شوپنهاور تبدیل شود و در عین حال به زبان های متعددی ترجمه شود.',
        cartQuantity: 1,
      })
    )
  ).toEqual({
    cartItems: [
      {
        id: '3',
        name: ' در باب حکمت زندگی ',
        slug: 'The-Wisdom-of-Life',
        category: 'فلسفی',
        image: './images/wisdom.jpg',
        price: '65000',
        brand: 'نیلوفر',
        rating: '5',
        numReviews: '10',
        countInStock: '20',
        author: 'آرتور شوپنهاور ',
        translate: ' محمد مبشری',
        description:
          'ین کتاب در واقع نام قسمت آخر کتابی با عنوان«ملحقات و متممات» است که  فیلسوف بزرگ آلمانی، آرتور شوپنهاور آن را نوشته است. «شوپنهاور مجموعه‌ی ملحقات و متممات را، که در حقیقت حاصل پژوهش‌های فلسفی وی در ایّام جوانی هستند، در سال ۱۸۵۱ به چاپ رساند. این مجموعه به‌گونه‌ای نوشته شده است که درک آن نیاز به آشنایی تخصصی با فلسفه‌ی فیلسوفان گذشته ندارد و همین امر باعث شده تا افراد نسبتاً زیادی این مجموعه را مطالعه نمایند.»این ویژگی در کتاب منجر شده است تا این نوشته به یکی از پرخواننده‌ترین  نو.شته های شوپنهاور تبدیل شود و در عین حال به زبان های متعددی ترجمه شود.',
        cartQuantity: 1,
      },
    ],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  })
})

test('should handle a book being removed to an empty list', () => {
  const previousState = {
    cartItems: [
      {
        id: '3',
        name: ' در باب حکمت زندگی ',
        slug: 'The-Wisdom-of-Life',
        category: 'فلسفی',
        image: './images/wisdom.jpg',
        price: '65000',
        brand: 'نیلوفر',
        rating: '5',
        numReviews: '10',
        countInStock: '20',
        author: 'آرتور شوپنهاور ',
        translate: ' محمد مبشری',
        description:
          'ین کتاب در واقع نام قسمت آخر کتابی با عنوان«ملحقات و متممات» است که  فیلسوف بزرگ آلمانی، آرتور شوپنهاور آن را نوشته است. «شوپنهاور مجموعه‌ی ملحقات و متممات را، که در حقیقت حاصل پژوهش‌های فلسفی وی در ایّام جوانی هستند، در سال ۱۸۵۱ به چاپ رساند. این مجموعه به‌گونه‌ای نوشته شده است که درک آن نیاز به آشنایی تخصصی با فلسفه‌ی فیلسوفان گذشته ندارد و همین امر باعث شده تا افراد نسبتاً زیادی این مجموعه را مطالعه نمایند.»این ویژگی در کتاب منجر شده است تا این نوشته به یکی از پرخواننده‌ترین  نو.شته های شوپنهاور تبدیل شود و در عین حال به زبان های متعددی ترجمه شود.',
        cartQuantity: 1,
      },
    ],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  }
  expect(
    reducer(
      previousState,
      removeFromCart({
        id: '3',
        name: ' در باب حکمت زندگی ',
        slug: 'The-Wisdom-of-Life',
        category: 'فلسفی',
        image: './images/wisdom.jpg',
        price: '65000',
        brand: 'نیلوفر',
        rating: '5',
        numReviews: '10',
        countInStock: '20',
        author: 'آرتور شوپنهاور ',
        translate: ' محمد مبشری',
        description:
          'ین کتاب در واقع نام قسمت آخر کتابی با عنوان«ملحقات و متممات» است که  فیلسوف بزرگ آلمانی، آرتور شوپنهاور آن را نوشته است. «شوپنهاور مجموعه‌ی ملحقات و متممات را، که در حقیقت حاصل پژوهش‌های فلسفی وی در ایّام جوانی هستند، در سال ۱۸۵۱ به چاپ رساند. این مجموعه به‌گونه‌ای نوشته شده است که درک آن نیاز به آشنایی تخصصی با فلسفه‌ی فیلسوفان گذشته ندارد و همین امر باعث شده تا افراد نسبتاً زیادی این مجموعه را مطالعه نمایند.»این ویژگی در کتاب منجر شده است تا این نوشته به یکی از پرخواننده‌ترین  نو.شته های شوپنهاور تبدیل شود و در عین حال به زبان های متعددی ترجمه شود.',
        cartQuantity: 1,
      })
    )
  ).toEqual({
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  })
})
