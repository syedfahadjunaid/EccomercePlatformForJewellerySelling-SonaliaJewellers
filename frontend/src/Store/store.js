import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Slice/cartSlice";
import  websiteheader  from "../Slice/websiteHeader";
import  adminLogin  from "../Slice/loginSlice";
import productSlice from "../Slice/productSlice";
import userLogin  from "../Slice/userSlice";
import  allPages from "../Slice/pagesSlice";
import  allPrice  from "../Slice/priceSlice";
export const store=configureStore({
    reducer:{
        allCart:cartSlice,
        WebsiteHeader:websiteheader,
        adminLogin:adminLogin,
        userLogin:userLogin,
        product:productSlice,
        allPages:allPages,
        allPrice:allPrice,
    },
    devTools:false
})