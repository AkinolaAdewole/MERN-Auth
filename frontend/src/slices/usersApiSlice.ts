import { apiSlice } from "./apiSlice";

const USER_URL:unknown='/api/users';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login: builder.mutation({
            query:(data)=>({
                url:`${USER_URL}/auth`,
                method: 'POST',
                body: data
            })
        })
    })
});