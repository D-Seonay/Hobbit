import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "react-oidc-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



// Loaded from environment variables
const oidcConfig = {
  authority: import.meta.env.VITE_OIDC_AUTHORITY,
  client_id: import.meta.env.VITE_OIDC_CLIENT_ID,
  redirect_uri: "http://localhost:5173/",
};

console.log(oidcConfig);

const queryClient = new QueryClient();



createRoot(document.getElementById('root')).render(
  <AuthProvider {...oidcConfig}>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>,
  </AuthProvider>
)
