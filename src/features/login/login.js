import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const initialState = {
    user: null,
    loggedIn: false,
}


export const bankApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: ""})
}

)

//slice



//export des actions