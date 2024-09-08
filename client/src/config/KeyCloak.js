// src/keycloak.js
import Keycloak from 'keycloak-js';

// Create a Keycloak instance using the Keycloak configuration
const keycloak = new Keycloak({
    url: process.env.REACT_APP_KEYCLOAK_URL, // Keycloak server URL
    realm: process.env.REACT_APP_KEYCLOAK_REALM, // Your Keycloak realm name
    clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID, // Your Keycloak client ID
  });

export default keycloak;
