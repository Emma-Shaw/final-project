import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useLocation } from "react-router-dom";

const UserAuth = () => {
    const { loginWithRedirect } = useAuth0();

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        loginWithRedirect().then(() => navigate(from, { replace: true }));
    };

    return (
        <div>
            <p>Please sign-in to view the page at {from}</p>
            <form onSubmit={handleSubmit}>
                <button type="submit">Sign-in</button>
            </form>
        </div>
    );
};

export default UserAuth;