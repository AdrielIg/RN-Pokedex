import { createContext, useState } from "react";

export const AuthContext = createContext({
  auth: "",
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState("");

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth("");
  };

  const valueContext = {
    auth,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};
