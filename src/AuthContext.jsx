import { createContext, useState, useContext } from "react";

const AuthContext = createContext({ user: null, setUser: () => {} });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const doLogin = (role) => {
    // talk to the database to get the user and role
    setUser({ name: "John Doe", role });
  };

  const doLogout = () => {
    console.log("logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, doLogin, doLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
