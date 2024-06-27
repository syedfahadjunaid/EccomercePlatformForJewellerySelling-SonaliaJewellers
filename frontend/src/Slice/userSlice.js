import { createSlice } from "@reduxjs/toolkit";
const avaliableUser =
  localStorage.getItem("user") !== null
    ? JSON.parse(localStorage.getItem("user"))
    : [];
const avaliableLogin = localStorage.getItem("user") !== null ? true : false;
const initialState = {
  user: avaliableUser,
  userLogin: avaliableLogin,
  loginOpen: false,
};
export const userLogin = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    addUserLogin: (state, action) => {
      state.user = action.payload;
      state.userLogin = true;
      console.log(action.payload, "hello");
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    userLogout: (state) => {
      state.user = [];
      localStorage.removeItem("user");
      state.userLogin = false;
    },
   openLoginForm:(state)=>{
      state.loginOpen=true
    },
     closeLoginForm:(state)=>{
      state.loginOpen=false
    }, 
  },
});
export const { addUserLogin, userLogout,openLoginForm,closeLoginForm } = userLogin.actions;
export default userLogin.reducer;
