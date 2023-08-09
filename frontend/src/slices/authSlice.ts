import {createSlice} from '@reduxjs/toolkit'


const storedInfo = localStorage.getItem('userInfo');

const initialState={
    userInfo:storedInfo !== null ? JSON.parse(storedInfo) as any
    : null,
}

 // userInfo: localStorage.getItem('userInfo')
    //  ? JSON.parse(localStorage.getItem('userInfo')) as userInfoProps
    //  : null,