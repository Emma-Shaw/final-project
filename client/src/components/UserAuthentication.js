import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/happy_hour_logo.png";
import { useEffect, useState } from "react";

const UserAuthentication = () => {

    const [createAccount, setCreateAccount] = useState(false);
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const [userGivenName, setUserGivenName] = useState();
    const [userSurname, setUserSurname] = useState();

    // Navigate to the home page once the user is signed in. Re-set the create account state to false.
    const home = useNavigate();
    const goToHome = () => {
        home("/home");
        setCreateAccount(false);
    };

    const createNewUser = (e) => {
        e.preventDefault();
        fetch("/users/create-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                givenName: userGivenName,
                surname: userSurname,
                email: userEmail,
                password: userPassword
            })
        })
        .then(res => {
            if (res?.ok) {
                return res.json();
            }
        })
        .then(data => {
            console.log("Data :", data.data) // to store user data in context (later on)
            goToHome(); // redirect to homepage once user has signed up
        })
        .catch((err) => {
            console.log("Error :", err);
        })
    };

    const locateUser = (e) => {
        e.preventDefault();
        fetch("/users/:userEmail")
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log("Data :", data.data) // to store user data in context (later on)
        })
        .catch((err) => {
            console.log("Error :", err);
        })
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
                <FormInput type="text" placeholder="Email" onChange={(e) => {setUserEmail(e.target.value)}} />
                <FormInput type="password" placeholder="Password" onChange={(e) => {setUserPassword(e.target.value)}} />
            </UserInputs>
            <UserActionBtn onClick={ locateUser }>Login</UserActionBtn>
            <Statement>Don't have an account? Let's create one.</Statement>
            <UserActionBtn onClick={setCreate}>Create account</UserActionBtn>
            </Login>}
            {createAccount === true && <SignUp>
                <Title>Sign-up</Title>
                <UserInputs>
                    <FormInput type="text" name="userGivenName" placeholder="Given name" onChange={(e) => {setUserGivenName(e.target.value)}} />
                    <FormInput type="text" name="userSurname" placeholder="Surname" onChange={(e) => {setUserSurname(e.target.value)}} />
                    <FormInput type="text" name="userEmail" placeholder="Email" onChange={(e) => {setUserEmail(e.target.value)}} />
                    <FormInput type="password" name="userPassword" placeholder="Password" onChange={(e) => {setUserPassword(e.target.value)}} />
                </UserInputs>
                <Statement>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</Statement>
                <UserActionBtn onClick={ createNewUser }>Sign-up</UserActionBtn>
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