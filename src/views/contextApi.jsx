import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const contextApi = ({ children }) => {
  const [system, setSystem] = useState({});
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={(auth, setAuth, user, setUser, system, setSystem)}
    >
      {children}
    </AuthContext.Provider>
  );
};
