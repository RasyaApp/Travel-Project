import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, adminOnly }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly == "admin") {
    console.log(user.role)
    alert(JSON.stringify(user));
    return <Navigate to="/" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  adminOnly: PropTypes.bool,
};

export default ProtectedRoute;
