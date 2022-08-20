import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/happy_hour_logo.png";
import { useState } from "react";

const UserAuthentication = () => {

    const [createAccount, setCreateAccount] = useState(false);

    const home = useNavigate();
    const goToHome = () => {
        home("/home");
        setCreate(false);
    };

    const setCreate = () => {
        setCreateAccount(true);
    };

    const returnLogin = () => {
        setCreateAccount(false);
    };

    return (
        <Wrapper>
            <Logo src={logo} />
            {createAccount === false && <Login>
            <Title>Login</Title>
            <UserInputs>
                <FormInput type="text" placeholder="Email" />
                <FormInput type="password" placeholder="Password" />
            </UserInputs>
            <UserActionBtn onClick={ goToHome }>Login</UserActionBtn>
            <Statement>Don't have an account? Let's create one.</Statement>
            <UserActionBtn onClick={setCreate}>Create account</UserActionBtn>
            </Login>}
            {createAccount === true && <SignUp>
                <Title>Sign-up</Title>
                <UserInputs>
                    <FormInput type="text" placeholder="Given name" />
                    <FormInput type="text" placeholder="Surname" />
                    <FormInput type="text" placeholder="Email" />
                    <FormInput type="password" placeholder="Password" />
                </UserInputs>
                <Statement>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</Statement>
                <UserActionBtn onClick={ goToHome }>Sign-up</UserActionBtn>
                <UserActionBtn onClick={ returnLogin }>Return</UserActionBtn>
            </SignUp>}
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

const Login = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SignUp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    margin: 20px 0px;
`;

const UserInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
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

const UserActionBtn = styled.button`
    margin: 10px 0px;
`;

const Logo = styled.img`
    width: 250px;
`;

export default UserAuthentication;