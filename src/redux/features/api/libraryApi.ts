import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Book, Borrow, BorrowSummary } from '../../types'

export const apiSlice = createApi({
  reducerPath: 'api', // <== this is your slice name for RTK Query
  baseQuery: fetchBaseQuery({ baseUrl: 'https://your-api.com/api' }),
  tagTypes: ['Books', 'Borrows'],
  endpoints: (builder) => ({
    // GET all books
    getBooks: builder.query<Book[], void>({
      query: () => '/books',
      providesTags: ['Books'],
    }),

    // CREATE a book
    addBook: builder.mutation<Book, Partial<Book>>({
      query: (book) => ({
        url: '/books',
        method: 'POST',
        body: book,
      }),
      invalidatesTags: ['Books'],
    }),

    // UPDATE a book
    updateBook: builder.mutation<Book, { id: string; data: Partial<Book> }>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),

    // DELETE a book
    deleteBook: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),

    // BORROW book
    borrowBook: builder.mutation<Borrow, { bookId: string; quantity: number; dueDate: string }>({
      query: ({ bookId, ...body }) => ({
        url: `/borrows/${bookId}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Books', 'Borrows'],
    }),

    // BORROW summary
    getBorrowSummary: builder.query<BorrowSummary[], void>({
      query: () => '/borrows/summary',
      providesTags: ['Borrows'],
    }),
  }),
})

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
} = apiSlice
