import { nanoid } from "@reduxjs/toolkit";
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3500/'}),
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
                    id:nanoid
                }
            }),
            invalidatesTags:['Users']
        })
    })
})
export const {
    useGetProductsQuery,
    useGetUsersQuery,
    useSingUpUserMutation
} = apiSlice