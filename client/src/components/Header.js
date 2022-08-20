import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/happy_hour_logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const welcome = useNavigate();
    const goToWelcome = () => {
        welcome("/");
    };

    return (
            <Wrapper>
                <LogoLink to="/home"><Logo src={logo} /></LogoLink>
                <NavigationBtns>
                <NavigationBar>
                    <NavUl>
                        <NavLi><NavLink to="/about">About</NavLink></NavLi>
                        <NavLi><NavLink to="/menu">Menu</NavLink></NavLi>
                        <NavLi><NavLink to="/profile">Profile</NavLink></NavLi>
                    </NavUl>
                </NavigationBar>
                <LogOutBtn onClick={ goToWelcome }>Log out</LogOutBtn>
                </NavigationBtns>
            </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    top: 0px;
`;

const Logo = styled.img`
    height: 150px;
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