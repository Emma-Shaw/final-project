import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/happy_hour_logo.png";
import { ImMenu, ImSpoonKnife } from "react-icons/im";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {

    const { logout } = useAuth0();

    const {
        state: { loggedIn },
        actions: { logoutUser },
    } = useContext(UserContext);

    return (
        <>
            {loggedIn === true && <Container>
                {<FirstBorder>Welcome &nbsp; <ImSpoonKnife /></FirstBorder>}
                <SecondBorder><SettingsBtn><ImMenu /></SettingsBtn></SecondBorder>
                <Wrapper>
                    <LogoLink to="/home"><Logo src={logo} /></LogoLink>
                    <NavigationBtns>
                    <NavigationBar>
                        <NavUl>
                            <NavLi><NavLink to="/purpose">Our purpose</NavLink></NavLi>
                            <NavLi><NavLink to="/menu">Menu</NavLink></NavLi>
                            <NavLi><NavLink to="/profile">Profile</NavLink></NavLi>
                        </NavUl>
                    </NavigationBar>
                    <LogOutBtn onClick={() => logout({ returnTo: window.location.origin })}>Sign-out</LogOutBtn>
                    </NavigationBtns>
                </Wrapper>
            </Container>}
        </>
    );
};

const Container = styled.div`
`;

const FirstBorder = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    padding: 20px;
    background: var(--color-cool-navy);
    color: var(--color-calm-beige);
`;

const SecondBorder = styled.div`
    display: flex;
    align-items: center;
    height: 75px;
    padding: 20px;
    background: var(--color-chill-blue);
    color: var(--color-calm-beige);
`;

const SettingsBtn = styled.button`
    background: var(--color-chill-blue);
    border: 2px solid var(--color-calm-beige);
    width: 50px;
    height: 35px;
    color: var(--color-calm-beige);
    padding-top: 5px;

    &:hover {
        cursor: pointer;
        background: var(--color-calm-beige);
        color: var(--color-cool-navy);
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    top: 0px;
`;

const Logo = styled.img`
    height: 100px;
    padding: 5px;
    padding-left: 0px;
`;

const NavigationBar = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 400px;
`;

const NavigationBtns = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const NavUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 350px;
`;

const NavLi = styled.li`
    padding: 5px;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: var(--color-cool-navy);
    padding-bottom: 5px;
    font-size: 15px;

    &:focus, &:active, &:visited, &:link, &:hover {
        text-decoration: none;
    }

    &:hover {
        border-bottom: 2px solid var(--color-cool-navy);
    }
`;

const LogoLink = styled(Link)`
`;

const LogOutBtn = styled.button`
`;

export default Header;