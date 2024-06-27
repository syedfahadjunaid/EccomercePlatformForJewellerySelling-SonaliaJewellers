import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  product: [],
};
export const allproductData = createAsyncThunk("allproductData", async () => {
  const {data} = await axios.get(
    `${process.env.React_App_Base_Url + "getProducts"}`
  );
  return data
});
export const allProduct = createSlice({
  name: "allProduct",
  initialState,
  reducers: {},
  extraReducers:{
    [allproductData.fulfilled]:(state,action)=>{
        state.product=(action.payload)
    }
  }
});

export default allProduct.reducer;
