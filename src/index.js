import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

// The state and the auth logic is managed in the AuthContextProvider and not directly in the app
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
