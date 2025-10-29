import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load stored user (if any)
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Sync user state with localStorage
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  // Mock login
  const login = (email, password) => {
    if (email && password) {
      const newUser = { email };
      setUser(newUser);
      return true;
    }
    return false;
  };

  // Mock register
  const register = (email, password) => {
    if (email && password) {
      const newUser = { email };
      setUser(newUser);
      return true;
    }
    return false;
  };

  // Logout user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing auth data
export const useAuth = () => useContext(AuthContext);
