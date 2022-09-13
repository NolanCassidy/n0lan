import * as dotenv from "dotenv";
dotenv.config();

const IS_DEV = false;
export const FRONTEND_ENDPOINT = IS_DEV
  ? "http://localhost:3000"
  : "https://n0lan.com";
export const BACKEND_ENDPOINT = IS_DEV
  ? "http://localhost:5000"
  : "https://api.n0lan.com";

// URL config for authentication
const auth0Domain = IS_DEV
  ? "https://dev-1ok38q50.us.auth0.com"
  : "https://dev-1ok38q50.us.auth0.com";
// : 'https://n0lan.us.auth0.com';
const responseType = "code";
const clientId = IS_DEV
  ? "RggomWkW1VJtyNVtPSUS1JoGkbtdvDkf"
  : "RggomWkW1VJtyNVtPSUS1JoGkbtdvDkf";
const scope = "openid profile email offline_access";
// Scheme is used to distinguish between VS Code and VS Code Internals
export const getLoginURL = (uriScheme: string) => {
  const redirectUri = `${FRONTEND_ENDPOINT}/api/auth/${uriScheme}/login`;
  return `${auth0Domain}/authorize?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
};

export const getLogoutURL = (uriScheme: string) => {
  const returnToUri = `${FRONTEND_ENDPOINT}/api/auth/${uriScheme}/logout`;
  return `${auth0Domain}/v2/logout?client_id=${clientId}&returnTo=${returnToUri}`;
};
