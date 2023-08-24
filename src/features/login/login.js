import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    token: null, 
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.loggedIn = true;
            state.token = action.payload.token;
        },
        logout: (state) => initialState,
    }, 
});

export const { loginSuccess, logout } = loginSlice.actions;
export default loginSlice.reducer;

