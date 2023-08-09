// Create an API Slice: You can use the createApi function to create a slice for 
// your API interactions. This slice will contain endpoints that define how data 
// should be fetched and managed.

// you can use fetchBaseQuery to configure how your queries are fetched.

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({baseUrl:''});

export const apiSlice = createApi({
    baseQuery,
    tagTypes:['User'],
    endpoints:(builder)=>({})
});