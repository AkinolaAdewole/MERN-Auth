import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../store';


const PrivateRoute = () => {
    const { userInfo } = useSelector((state:AppState) => state.auth);
    return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
}

export default PrivateRoute