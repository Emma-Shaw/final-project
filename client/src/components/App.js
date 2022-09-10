import styled from "styled-components";
import GlobalStyle from "./GlobalStyles"
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import RequireAuth from "./RequireAuth";
import AuthLayout from "./AuthLayout";
import { useAuth0 } from "@auth0/auth0-react";

import { UserContext } from "./UserContext";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Profile from "./Profile";
import CreateMenu from "./CreateMenu";
import Menu from "./Menu";
import OurPurpose from "./OurPurpose"
import ErrorPage from "./ErrorPage";
import { useEffect } from "react";

const App = () => {

  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const { 
          state: { loggedIn },
          actions: { loginUser }
        } = useContext(UserContext);

  useEffect(() => {
      const authenticate = async () => {
          if (isAuthenticated) {
              const requestToken = await getAccessTokenSilently();
              fetch("/private", {
                  method: "POST",
                  body: JSON.stringify(user),
                  headers: {
                      Authorization: "Bearer " + requestToken,
                      "Content-Type": "application/json",
                  },
              }).then((res) => {
                  if (res.status === 200) {
                      loginUser(user)
                      return res.json().then((data) => console.log("User data :", data))
                  }
              }).catch((error) => {
                  console.log("Error :", error);
              })
          };
      };
      authenticate()
  }, [isAuthenticated, getAccessTokenSilently]);

  useEffect(() => {console.log("Current user :", user)}, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
      <Header />
          <Routes>
            <Route exact path="/" element={<AuthLayout />}></Route>
            <Route path="/home" element={<RequireAuth><Homepage /></RequireAuth>}></Route>
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>}></Route>
            <Route path="/create-menu" element={<RequireAuth><CreateMenu /></RequireAuth>}></Route>
            <Route path="/menu" element={<RequireAuth><Menu /></RequireAuth>}></Route>
            <Route path="/purpose" element={<RequireAuth><OurPurpose /></RequireAuth>}></Route>
            <Route exact path="/not-found" element={<ErrorPage />}></Route>
          </Routes>
        </Wrapper>
        <Footer />
      </>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export default App;
