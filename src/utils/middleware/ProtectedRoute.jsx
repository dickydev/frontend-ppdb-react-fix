/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem("token");
    if(!token){
        return <Navigate to="/" replace />;
    }
    return children;
}

export default ProtectedRoute;