import { configureStore } from '@reduxjs/toolkit'
import themes from '../theme'

export const store = configureStore({
  reducer: {
    theme: themes
  },
})