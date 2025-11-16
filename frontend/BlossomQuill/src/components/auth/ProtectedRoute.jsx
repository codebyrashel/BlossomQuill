import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RingLoader } from "react-spinners";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true;
  const loading = true;
  const location = useLocation();

if (loading) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700">
      <RingLoader color="#403e8d" size={80} speedMultiplier={1.2} />
      <p className="mt-6 text-lg font-medium animate-pulse">
        Checking your credentials...
      </p>
    </div>
  );
}

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;