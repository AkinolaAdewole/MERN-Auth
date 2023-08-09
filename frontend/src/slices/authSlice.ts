import {createSlice} from '@reduxjs/toolkit'


const storedInfo = localStorage.getItem('userInfo');

type INITIALSTATETYPE ={

    userInfo : null | any
}

const initialState:INITIALSTATETYPE ={
  
    userInfo : storedInfo !== null ? JSON.parse(storedInfo)
    : null,
   
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
          },
 // removing the action parameter from the logout reducer indicate that the action creator doesn't require a payload when called.
          logout: (state) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
          },
    }
})

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;