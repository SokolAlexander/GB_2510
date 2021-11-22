import { Navigate, Route } from "react-router";

export const PrivateRoute = ({ authed, children }) => {
  return authed ? { children } : <Navigate to="/" replace />;
};
