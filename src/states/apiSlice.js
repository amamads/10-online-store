import { nanoid } from "@reduxjs/toolkit";
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath:'api',
    // baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3500/'}),
    baseQuery:fetchBaseQuery({baseUrl:'https://68fe51b77c700772bb137661.mockapi.io/'}),
    endpoints:builder=>({
        getProducts: builder.query({
            query:()=> 'products',
            providesTags:['Products']
        }),
        getUsers: builder.query({
            query:()=> 'users',
            providesTags:['Users']
        }),
        singUpUser: builder.mutation({
            query: initial => ({
                url: 'users',
                method:'POST',
                body:{
                    ...initial,
                    isAdmin:Boolean(initial.isAdmin === 'true'),
                    id:nanoid
                }
            }),
            invalidatesTags:['Users','Products']
        })
    })
})
export const {
    useGetProductsQuery,
    useGetUsersQuery,
    useSingUpUserMutation
} = apiSlice