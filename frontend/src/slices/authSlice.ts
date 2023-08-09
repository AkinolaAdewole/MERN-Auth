import {createSlice} from '@reduxjs/toolkit'


const storedInfo = localStorage.getItem('userInfo');

type INITIALSTATETYPE ={
  
    userInfo : null | {id: number}
  
 
}
const initialState:INITIALSTATETYPE ={
  
    userInfo : storedInfo !== null ? JSON.parse(storedInfo)
    : null,
  
   
}


const authSlice = createSlice({
    name: 'authxxxsss',
    initialState,
    reducers:{
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
          },
          logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
          },
    }
})

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;