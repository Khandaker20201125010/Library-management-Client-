import type {
  IBook,
  IBorrow,
  IBorrowSummary,
} from "@/redux/Interfaces/Interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-api-ten.vercel.app/api",
  }),
  tagTypes: ["Books", "Borrows"],
  endpoints: (builder) => ({
    // GET all books
    getBooks: builder.query<
      {
        data: IBook[];
        meta: {
          total: number;
          page: number;
          limit: number;
          totalPages: number;
        };
      },
      { page?: number; limit?: number }
    >({
      query: ({ page = 1, limit = 6 } = {}) =>
        `/books?page=${page}&limit=${limit}`,
      providesTags: ["Books"],
    }),
    
    getBookById: builder.query<IBook, string>({
      query: (id) => `/books/${id}`,
      transformResponse: (response: { data: IBook }) => response.data,
      providesTags: ["Books"],
    }),

    // CREATE a book
    addBook: builder.mutation<IBook, Partial<IBook>>({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),

    // UPDATE a book
    updateBook: builder.mutation<IBook, { id: string; data: Partial<IBook> }>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),

    // DELETE a book
    deleteBook: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),

    // BORROW book
    borrowBook: builder.mutation<
      IBorrow,
      { book: string; quantity: number; dueDate: string }
    >({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Books", "Borrows"],
    }),

    // BORROW summary
    getBorrowSummary: builder.query<
      {
        data: IBorrowSummary[];
        meta: {
          total: number;
          page: number;
          limit: number;
          totalPages: number;
        };
      },
      { page?: number; limit?: number }
    >({
      query: ({ page = 1, limit = 5 } = {}) =>
        `/borrow?page=${page}&limit=${limit}`,
      providesTags: ["Borrows"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
} = apiSlice;
