import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  price: [],
};
export const allPriceData = createAsyncThunk("allPriceData", async () => {
  const {data} = await axios.get(
    `${process.env.React_App_Base_Url + "getAllPrices"}`
  );
  return data
});
export const allPrice = createSlice({
  name: "allProduct",
  initialState,
  reducers: {},
  extraReducers:{
    [allPriceData.fulfilled]:(state,action)=>{
        state.price=(action.payload)
    }
  }
});

export default allPrice.reducer;
