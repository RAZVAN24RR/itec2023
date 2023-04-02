import { useState } from "react";
import AuthContext from "./Context.js";

const AuthProvider = ({ children }) => {
  const [tokenJSW, setToken] = useState("");
  return (
    <AuthContext.Provider value={tokenJSW}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
