import { Outlet } from "react-router-dom";
import AuthStatus from "./AuthStatus";

const AuthLayout = () => {
    return (
        <div>
            <AuthStatus />
            <Outlet />
        </div>
    );
};

export default AuthLayout;