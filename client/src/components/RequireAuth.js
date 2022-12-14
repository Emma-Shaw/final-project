import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const { isAuthenticated, user } = useAuth0();
    let location = useLocation();

    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;