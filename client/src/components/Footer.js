import styled from "styled-components";
import logo from "../assets/happy_hour_logo.png";
import { ImInstagram, ImFacebook2, ImTwitter, ImPinterest2  } from "react-icons/im";

const Footer = () => {
    return (
            <Wrapper>
                <Icons>
                    <IconsList>
                        <IconListItem><ImInstagram /></IconListItem>
                        <IconListItem><ImFacebook2 /></IconListItem>
                        <IconListItem><ImTwitter /></IconListItem>
                        <IconListItem><ImPinterest2 /></IconListItem>
                    </IconsList>
                </Icons>
                <Logo><LogoImg src={logo} /></Logo>
            </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 125px;
    bottom: 0px;
    margin-top: 10px;
`;

const Logo = styled.div`
`;

const LogoImg = styled.img`
    height: 100px;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-bright-red);
    height: 100%;
`;

const IconsList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 200px;
`;

const IconListItem = styled.li`
    transform: scale(1.5);
    padding: 5px;
    &:hover {
        cursor: pointer;
        color: var(--color-cool-navy);
    }
`;

export default Footer;