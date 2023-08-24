import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUsername } = profileSlice.actions;
export default profileSlice.reducer;
