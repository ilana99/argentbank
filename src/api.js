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
                headers: {
                  'Authorization': `Bearer ${token.token}`
                },
            }),
          }),
          
          updateProfile: builder.mutation({
            query: ({ newUsername, token }) => {
              //console.log(newUsername); 
              return {
                url: '/user/profile',
                method: 'PUT',
                headers: {
                  'Authorization': `Bearer ${token}`
                },
                body: {
                  userName: newUsername
                },
              };
            },
          }),
          
    }),
})

export const { useUserLoginMutation, useUserSignupMutation, useUserProfileMutation, useUpdateProfuleMutation } = bankApi;

export default bankApi;