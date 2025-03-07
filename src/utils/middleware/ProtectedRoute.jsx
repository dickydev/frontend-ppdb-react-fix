// components/ProtectedRoute.js
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

// Component to protect routes that require authentication
export const ProtectedRoute = () => {
  const { state } = useContext(AuthContext);
  
  if (state.isLoading) {
    // Show loading indicator while checking authentication
    return <div>Loading...</div>;
  }
  
  // If not authenticated, redirect to login
  if (!state.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // Render child routes
  return <Outlet />;
};

// Component to protect admin-only routes
export const AdminRoute = () => {
  const { state } = useContext(AuthContext);
  
  if (state.isLoading) {
    return <div>Loading...</div>;
  }
  
  // If not authenticated or not admin, redirect
  if (!state.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (state.role !== 'admin') {
    return <Navigate to="/home" replace />;
  }
  
  // Render child routes for admin
  return <Outlet />;
};