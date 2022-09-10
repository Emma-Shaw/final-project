import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const { isAuthenticated } = useAuth0();
    let location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/authentication" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;