import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  websiteInfo: [],

};

export const websiteheader = createSlice({
  name: "websiteheader",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.websiteInfo = action.payload;
    },
  },
});
export const { addData } = websiteheader.actions;
export default websiteheader.reducer;
