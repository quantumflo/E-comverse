import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import keycloak from "./config/KeyCloak";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [kcInitialized, setKcInitialized] = useState(false);

  useEffect(() => {
    // Initialize Keycloak on app load'
    const initKeycloak = () => {
      if (kcInitialized) return;
      keycloak
        .init({ onLoad: "check-sso", pkceMethod: "S256" })
        .then((authenticated) => {
          setIsAuthenticated(authenticated);
          console.log("Keycloak initialized:", keycloak.authenticated);
          console.log("Keycloak token:", keycloak.token);
          console.log("Keycloak authenticated:", authenticated);

          keycloak.onAuthSuccess = () => {
            console.log("Keycloak onAuthSuccess");
          };

          keycloak.onAuthError = () => {
            console.log("Keycloak onAuthError");
          };

          keycloak.onTokenExpired = () => {
            console.log("Keycloak onTokenExpired");
          };
        })
        .catch((error) => {
          console.error("Keycloak initialization error:", error);
        });
      setKcInitialized(false);
    };
    initKeycloak();
  }, [kcInitialized]);

  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Main />
    </div>
  );
}

export default App;
