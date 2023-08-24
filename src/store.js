import { configureStore } from '@reduxjs/toolkit'
import loginReducer, { loginSuccess, logout } from './features/login/login'
import usernameReducer, { setUsername } from './features/username/username'
import modalReducer, { toggleModal } from './features/modal/modal'

import bankApi from './api'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
    reducer: {
        login: loginReducer,
        profile: usernameReducer,
        modal: modalReducer,
        [bankApi.reducerPath]: bankApi.reducer,  //query
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bankApi.middleware), //query

})

export { loginSuccess, logout, setUsername, toggleModal };
export default store;

setupListeners(store.dispatch) //query