import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  // check if there is the user in localStorage first
  const [user, setUser] = useState(null);
  const [tokens, setTokens] = useState(null);
  // u can set context data and pass them as context data from the first token
  let contextData = {
    name: user ? user : "Anonymous",
    setUser: setUser,
    tokens: tokens,
    setTokens: setTokens,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
