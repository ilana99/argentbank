import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpened: false,
}


const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isOpened = !state.isOpened;
        },
    }, 
});

export const {toggleModal} = modalSlice.actions;
export default modalSlice.reducer