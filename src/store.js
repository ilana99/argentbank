import { configureStore } from '@reduxjs/toolkit'
import loginReducer, { loginSuccess, logout } from './features/login/login'
import usernameReducer, { setUsername, setFirstname, setLastname } from './features/username/username'
import modalReducer, { toggleModal } from './features/modal/modal'

import bankApi from './api'
import { setupListeners } from '@reduxjs/toolkit/query'

const storedLoggedIn = localStorage.getItem('loggedIn') === 'true';
const storedToken = localStorage.getItem('token'); 

const store = configureStore({
    reducer: {
        login: loginReducer,
        profile: usernameReducer,
        modal: modalReducer,
        [bankApi.reducerPath]: bankApi.reducer,  //query
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bankApi.middleware), //query
    preloadedState: {
        login: {
            loggedIn: storedLoggedIn,
            token: storedToken,
        },
    }
})

store.subscribe(() => { // keep logged in
    const state = store.getState();
    localStorage.setItem('loggedIn', state.login.loggedIn);
    localStorage.setItem('token', state.login.token); 
});

setupListeners(store.dispatch) //query

export { loginSuccess, logout, setUsername, setFirstname, setLastname, toggleModal };
export default store;

