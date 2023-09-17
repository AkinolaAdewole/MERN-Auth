import { apiSlice } from "./apiSlice";

// const USERS_URL:string='http://localhost:4200/api/users';
const USERS_URL:string= 'https://backend-kappa-brown.vercel.app/api/users'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({

        login: builder.mutation({
            query:(data)=>({
                url:`${USERS_URL}/auth`,
                method: 'POST',
                body: data
            }),
        }),

        logout: builder.mutation({
            query: () => ({
              url: `${USERS_URL}/logout`,
              method: 'POST',
            }),
          }),

          register: builder.mutation({
            query: (data) => ({
              url: `${USERS_URL}`,
              method: 'POST',
              body: data,
            }),
          }),

          updateUser: builder.mutation({
            query: (data) => ({
              url: `${USERS_URL}/profile`,
              method: 'PUT',
              body: data,
            }),
          }),
    })
});

export const {  useLoginMutation,
                useLogoutMutation,
                useRegisterMutation,
                useUpdateUserMutation,
              } = userApiSlice;