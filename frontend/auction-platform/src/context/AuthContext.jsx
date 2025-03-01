import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem("token"),
    user: null,
  });

  const login = (token, user) => {
    setAuthState({ token, user });
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setAuthState({ token: null, user: null });
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
