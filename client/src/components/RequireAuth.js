import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

const RequireAuth = ({ children }) => {
    const { isAuthenticated } = useAuth0();
    let location = useLocation();

    useEffect(() => {
        console.log("Authentication Status :", isAuthenticated)
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return <Navigate to="/not-found" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;