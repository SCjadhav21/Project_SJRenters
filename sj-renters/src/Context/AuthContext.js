import React, { useState } from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const [mail, setMail] = useState("");

  const toggleAuth = (el = "") => {
    setIsAuth(!isAuth);
    setMail(el);
  };

  return (
    <AuthContext.Provider value={{ mail, isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };
