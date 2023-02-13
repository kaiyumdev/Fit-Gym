import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  //   let auth = useAuth();
  //   let location = useLocation();
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // authorized so return child components
  return children;
};

export default PrivateRoute;
