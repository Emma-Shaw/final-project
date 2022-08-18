import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return <Wrapper>
        <Logo>Happy Hour</Logo>
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
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 10px;
`;

const Logo = styled.h1`
`;

const NavigationBar = styled.nav`
    width: 50vh;
    height: 10vh;
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
    height: 100%;
    width: 100%;
`;

const NavLi = styled.li`
`;

const NavLink = styled(Link)`
`;

const LogOutBtn = styled.button`
`;

export default Header;