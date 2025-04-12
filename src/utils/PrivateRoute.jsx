import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {



    
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
