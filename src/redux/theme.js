import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {theme: true},
  reducers: {
    dark: (state) => {
      state.theme = true
    },
    light: (state) => {
      state.theme = false
    }
  }
})

export const { dark, light } = themeSlice.actions

export default themeSlice.reducer