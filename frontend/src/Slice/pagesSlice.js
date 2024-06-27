import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  pages: [],
};
export const allPagesData = createAsyncThunk("allPagesData", async () => {
  const { data } = await axios.get(
    `${process.env.React_App_Base_Url + "getAllPages"}`
  );
  return data;
});
export const allPages = createSlice({
  name: "allPages",
  initialState,
  reducers: {},
  extraReducers: {
    [allPagesData.fulfilled]: (state, action) => {
      state.pages = action.payload;
    },
  },
});

export default allPages.reducer;
