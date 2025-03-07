
import { jwtDecode } from 'jwt-decode';

export const verifyToken = (token) => {
  if (!token) return null;
  
  try {
    // Decode the token to check its contents
    const decoded = jwtDecode(token);
    // Check if token is expired
    const currentTime = Date.now() / 1000;
    if (decoded.exp && decoded.exp < currentTime) {
      return null;
    }
    
    // Return user information from the token
    return {
      userId: decoded.id,
      username: decoded.username,
      role: decoded.role,
      email: decoded.email
    };
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};