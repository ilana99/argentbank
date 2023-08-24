import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const bankApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1" }),
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: ({ email, password }) => ({
                url: '/user/login',
                method: 'POST',
                body: { email, password },
            })
        }),
        userSignup: builder.mutation({
            query: ({ username, password, firstName, lastName, userName }) => ({
                url: '/user/signup',
                method: 'POST',
                body: { username, password, firstName, lastName, userName },
            })
        }),
        userProfile: builder.mutation({
            query: (token) => ({
                url: '/user/profile',
                method: 'POST',
            }),
            prepareHeaders: (headers, { getState }) => {
                const token = getState().login.token;
                if (token) {
                    headers.set('Authorization', `Bearer ${token}`);
                }
                return headers;
            },
        }),
        updateProfile: builder.mutation({
            query: ({ userName, token }) => ({
                url: '/user/profile',
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: { 
                    userName: userName },

            }),
        }),
    }),
})

export const { useUserLoginMutation, useUserSignupMutation, useUserProfileMutation, useUpdateProfuleMutation } = bankApi;

export default bankApi;