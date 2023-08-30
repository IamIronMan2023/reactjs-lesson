import React, { useContext, createContext, useState } from "react";

export const AuthContextDemo = createContext();

export const AuthProviderDemo = ({ children }) => {
  const [message, setMessage] = useState("");

  const value = { message, setMessage };

  return (
    <AuthContextDemo.Provider value={value}>
      {children}
    </AuthContextDemo.Provider>
  );
};
