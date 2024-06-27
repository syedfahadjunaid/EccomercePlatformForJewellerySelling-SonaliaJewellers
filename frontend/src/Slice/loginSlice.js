import { createSlice } from "@reduxjs/toolkit";
const avaliableAdminUser =
  localStorage.getItem("admin") !== null
    ? JSON.parse(localStorage.getItem("admin"))
    : [];
const avaliableAdminLogin = localStorage.getItem("admin") !== null ? true : false;
const initialState = {
  login: avaliableAdminUser,
  adminLogin: avaliableAdminLogin,
};
export const adminLogin = createSlice({
  name: "adminLogin",
  initialState,
  reducers: {
    addLogin: (state, action) => {
      state.login = action.payload;
      state.adminLogin=true;
      localStorage.setItem("admin", JSON.stringify(action.payload));
    },
    adminLogout: (state) => {
      state.login = [];
      localStorage.removeItem("admin");
      state.adminLogin = false;
    },
  },
});
export const { addLogin,adminLogout } = adminLogin.actions;
export default adminLogin.reducer;
