import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/happy_hour_logo.png";

const Header = () => {

    return (
        <Wrapper>
            <LogoLink to="/"><Logo src={logo} /></LogoLink>
            <NavigationBtns>
            <NavigationBar>
                <NavUl>
                    <NavLi><NavLink to="/about-us">About Us</NavLink></NavLi>
                    <NavLi><NavLink to="/to-drink">To Drink</NavLink></NavLi>
                    <NavLi><NavLink to="/profile">My Profile</NavLink></NavLi>
                </NavUl>
            </NavigationBar>
            <LogOutBtn>Log out</LogOutBtn>
            </NavigationBtns>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 10px;
`;

const Logo = styled.img`
    height: 150px;
`;

const NavigationBar = styled.nav`
    display: flex;
    justify-content: space-evenly;
    margin-right: 50px;
`;

const NavigationBtns = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const NavUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavLi = styled.li`
`;

const NavLink = styled(Link)`
`;

const LogoLink = styled(Link)`
`;

const LogOutBtn = styled.button`
`;

export default Header;