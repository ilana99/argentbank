import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  firstName: null,
  lastName: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
      
    },
    setFirstname: (state, action) => {
      state.firstName = action.payload;
    },
    setLastname: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export const { setUsername, setFirstname, setLastname } = profileSlice.actions;
export default profileSlice.reducer;
