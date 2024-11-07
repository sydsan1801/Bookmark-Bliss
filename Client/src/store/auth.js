import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:"auth",
    initialState:{isLoggedIn:false,role:"User"},
    reducers:{
        login(state){
            state.isLoggedIn=true;
        },
        LogOut(state){
            state.isLoggedIn=false;
        },
        changeRole(state,action){
            const role=action.payload;
            state.role=role
        },
    },
});
export const authActions=authSlice.actions;
export default authSlice.reducer;

