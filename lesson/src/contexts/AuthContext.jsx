import React, { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState("");

  const value = {
    setToken,
    token,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
