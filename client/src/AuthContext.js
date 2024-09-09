import React, { createContext, useEffect, useState } from "react";
import keycloak from "./config/KeyCloak"; // Ensure the correct path to Keycloak configuration

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);

  useEffect(() => {
    const refreshToken = () => {
      keycloak
        .updateToken(30)
        .then((refreshed) => {
          if (refreshed) {
            setToken(keycloak.token);
            console.log("Token refreshed");
          } else {
            console.warn(
              "Token not refreshed, valid for " +
                Math.round(
                  keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000
                ) +
                " seconds"
            );
          }
        })
        .catch((error) => {
          console.error("Failed to refresh token", error);
        });
    };

    keycloak.onTokenExpired = refreshToken;
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, setToken, email, setEmail, name, setName, lastName, setLastName }}
    >
      {children}
    </AuthContext.Provider>
  );
};
