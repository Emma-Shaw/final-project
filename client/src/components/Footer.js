import styled from "styled-components";
import logo from "../assets/happy_hour_logo.png";
import banner from "../assets/cheers_longest_version.png";
import { ImInstagram, ImFacebook2, ImTwitter, ImPinterest2  } from "react-icons/im";

const Footer = () => {
    return (
        <>
            <Banner src={banner} />
            <Wrapper>
                <License>2022 @ Happy Hour Ltd. All rights reserved.</License>
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
        </>
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
    display: flex;
    width: 300px;
    justify-content: flex-end;
`;

const License = styled.p`
    width: 300px;
`;

const LogoImg = styled.img`
    width: 150px;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-dark-wine);
    height: 100%;
    width: 450px;
`;

const IconsList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 300px;
`;

const IconListItem = styled.li`
    transform: scale(1.5);
    padding: 5px;
    &:hover {
        cursor: pointer;
        color: var(--color-cool-navy);
    }
`;

const Banner = styled.img`
    display: flex;
    align-self: center;
    width: 100%;
    border-top: 5px solid var(--color-chill-blue);
    border-bottom: 5px solid var(--color-chill-blue);
    opacity: 0.75;
`;

export default Footer;