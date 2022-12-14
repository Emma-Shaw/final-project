import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from './components/UserContext';
import { RecipesProvider } from './components/RecipesContext';
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-41dcx13f.us.auth0.com"
    clientId="gme5aH3b6hBXoeqIx1824kKS7wkDLlEB"
    redirectUri={window.location.origin}
    audience="Final_Project_Happy_Hour"
    scope='read:current_user update:current_user_metadata'
    >
      <BrowserRouter>
        <UserProvider>
          <RecipesProvider>
              <App />
          </RecipesProvider>
        </UserProvider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

