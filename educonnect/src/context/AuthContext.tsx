import React, { createContext, useState, useContext, useEffect } from "react";

interface User {
  username: string;
  role: string;
}

interface AuthContextType {
  user: string | null;
  role: string | null;
  users: User[];
  login: (username: string, role: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>(JSON.parse(localStorage.getItem("users") || "[]"));

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const { username, role } = JSON.parse(storedUser);
      setUser(username);
      setRole(role);
    }
  }, []);

  const login = (username: string, role: string) => {
    setUser(username);
    setRole(role);
    localStorage.setItem("user", JSON.stringify({ username, role }));
    const updatedUsers = [...users, { username, role }];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, role, users, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};