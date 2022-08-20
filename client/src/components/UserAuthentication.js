import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/happy_hour_logo.png";

const UserAuthentication = () => {

    const home = useNavigate();
    const goToHome = () => {
        home("/home");
    };

    return (
        <Wrapper>
            <Logo src={logo} />
            <SignUp>
                <Title>Sign-up</Title>
                <NewUserInputs>
                    <FormInput type="text" placeholder="Given name" value="" />
                    <FormInput type="text" placeholder="Surname" value="" />
                    <FormInput type="text" placeholder="Email" value="" />
                    <FormInput type="password" placeholder="Password" value="" />
                </NewUserInputs>
                <Statement>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</Statement>
                <SignUpBtn onClick={ goToHome }>Sign-up</SignUpBtn>
            </SignUp>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    background: var(--color-calm-beige);
    text-align: center;
`;

const SignUp = styled.div`
`;

const Title = styled.h1`
    margin: 20px 0px;
`;

const NewUserInputs = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormInput = styled.input`
    width: 300px;
    height: 20px;
    font-size: 15px;
`;

const Statement = styled.p`
    width: 300px;
    text-align: center;
    margin: 10px;
`;

const SignUpBtn = styled.button`
    margin: 20px 0px;
`;

const Logo = styled.img`
    width: 250px;
`;

export default UserAuthentication;