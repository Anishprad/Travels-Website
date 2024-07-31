import { Auth0Provider } from "@auth0/auth0-react";
import MainRoute from "./routes/MainRoute";

// Main
const App = () => (
  <Auth0Provider  
    domain="dev-u2832spoo1d4eyjf.us.auth0.com"
    clientId="2pOpsRQIiY9VhFkfIHDSYqKBvZ7cfXMM"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <MainRoute />
  </Auth0Provider>
);

export default App;
