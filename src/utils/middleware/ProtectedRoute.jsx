import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { state } = useContext(AuthContext);

  console.log("State di ProtectedRoute:", state);

  return state.token ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
