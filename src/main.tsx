// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Auth0Provider } from '@auth0/auth0-react';
import envConfig from './config/env.config.ts';

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain={envConfig.AUTH0_DOMAIN}
    clientId={envConfig.AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    {/* <StrictMode> */}
    <App />
    {/* </StrictMode> */}
  </Auth0Provider>,
)
