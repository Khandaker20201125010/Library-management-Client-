import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/api/libraryApi'
import bookReducer from './features/api/bookSlice/bookSlice'



export const store = configureStore({
 reducer: { 
    [apiSlice.reducerPath]: apiSlice.reducer,
    books: bookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store