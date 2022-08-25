import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/happy_hour_logo.png";
import { useEffect, useState } from "react";

const UserAuthentication = () => {

    const [createAccount, setCreateAccount] = useState(false);
    const [userDoesntExists, setUserDoesntExists] = useState(false);
    const [userPasswordDoesntMatch, setUserPasswordDoesntMatch] = useState(false);
    const [fillOutAllFields, setFillOutAllFields] = useState();
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

    const setCreate = () => {
        setCreateAccount(true);
    };

    const returnLogin = () => {
        setCreateAccount(false);
    };

    // Functionality: Check that all of the fields are filled out before creating a new user.
    const createNewUser = (e) => {
        e.preventDefault()
        if (!userEmail || !userPassword || !userGivenName || !userSurname) {
            setFillOutAllFields(true);
        } else {
            setFillOutAllFields(false);
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
            .then(res => res.json())
            .then(data => {
                console.log("Data :", data) // to store user data in context (later on)
                goToHome(); // redirect to homepage once user has signed up
            })
            .catch((err) => {
                console.log("Error :", err);
            })
        }
    };

    // Functionality: Check that the user exists and that the passwords match before logging in.
    const locateUser = (e) => {
        setUserDoesntExists(false);
        setUserPasswordDoesntMatch(false);
        e.preventDefault();
        fetch(`/users/${userEmail}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            if (data.status !== 200) {
                setUserDoesntExists(true);
            } else if (data?.data?.password !== userPassword) {
                setUserDoesntExists(false);
                setUserPasswordDoesntMatch(true);
            } else {
                setUserDoesntExists(false);
                setUserPasswordDoesntMatch(false);
                goToHome(); // redirect to homepage once user has signed up
            }
        })
        .catch((err) => {
            console.log("Error :", err);
        })
    };

    return (
        <Wrapper>
            <Logo src={logo} />
            {createAccount === false && <Login>
            <Title>Login</Title>
            <UserInputs>
                <FormInput type="text" placeholder="Email" onChange={(e) => {setUserEmail((e.target.value).toLowerCase())}} />
                <FormInput type="password" placeholder="Password" onChange={(e) => {setUserPassword((e.target.value).toLowerCase())}} />
            </UserInputs>
            {userDoesntExists === true && 
            <Statement style={{ color: "var(--color-bright-red)" }}>There are no accounts linked to this email address.</Statement>}
            {userPasswordDoesntMatch === true && 
            <Statement style={{ color: "var(--color-bright-red)" }}>Wrong password.</Statement>}
            <UserActionBtn onClick={ locateUser }>Login</UserActionBtn>
            <Statement>Don't have an account? Let's create one.</Statement>
            <UserActionBtn onClick={setCreate}>Create account</UserActionBtn>
            </Login>}
            {createAccount === true && <SignUp>
                <Title>Sign-up</Title>
                <UserInputs>
                    <FormInput type="text" name="userGivenName" placeholder="Given name" onChange={(e) => {setUserGivenName((e.target.value).toLowerCase())}} />
                    <FormInput type="text" name="userSurname" placeholder="Surname" onChange={(e) => {setUserSurname((e.target.value).toLowerCase())}} />
                    <FormInput type="text" name="userEmail" placeholder="Email" onChange={(e) => {setUserEmail((e.target.value).toLowerCase())}} />
                    <FormInput type="password" name="userPassword" placeholder="Password" onChange={(e) => {setUserPassword((e.target.value).toLowerCase())}} />
                </UserInputs>
                {fillOutAllFields === true &&
                <Statement style={{ color: "var(--color-bright-red)" }} >Please fill out all of the required fields.</Statement>}
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