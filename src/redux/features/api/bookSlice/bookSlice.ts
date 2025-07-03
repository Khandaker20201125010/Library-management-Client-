import type { IBook } from '@/redux/Interfaces/Interfaces'
import { createSlice, type PayloadAction,  } from '@reduxjs/toolkit'


interface BookState {
  list: IBook[]
}

const initialState: BookState = {
  list: [],
}

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<IBook[]>) {
      state.list = action.payload
    },
  },
})

export const { setBooks } = bookSlice.actions
export default bookSlice.reducer
