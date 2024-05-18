import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    localStorage.removeItem("auth_token");
    sessionStorage.removeItem("auth_token");
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
